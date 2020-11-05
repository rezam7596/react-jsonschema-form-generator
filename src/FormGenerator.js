import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Button, buttonThemes } from 'tapsi-components';
import { formGeneratorPropTypes, formGeneratorDefaultPropTypes } from './propTypes';
import formGridSystem from './helpers/gridSystemClasses.scss';
import style from './FormGenerator.scss';
import RawForm from './RawForm';

function FormGenerator({
  submitLabel,
  shouldShowPreview,
  className,
  formContext,
  customSchema: _customSchema,
  fetchApi: _fetchApi,
  fetchApiConfig: _fetchApiConfig,
  baseFrontFormsUrl,
  theme,
  ...restProps
}) {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState(restProps.formData);
  const [customSchema, setCustomSchema] = React.useState(_customSchema);

  const computedFormContext = {
    ...restProps.formContext,
    formData,
    customSchema,
    setCustomSchema,
    fetchApi: _fetchApi || fetch,
    fetchApiConfig: _fetchApiConfig,
    baseFrontFormsUrl,
  };
  const previewModal = (
    <Modal open={isPreviewModalOpen} onClose={() => setIsPreviewModalOpen(false)}>
      <div className="form-generator-modal">
        <RawForm {...restProps} formContext={computedFormContext} customSchema={customSchema} formData={formData} preview>
          <div className="rjf-buttons">
            <Button onClick={() => setIsPreviewModalOpen(false)}>انصراف</Button>
            <Button type="submit" theme={buttonThemes.THEME_3}>
              تایید
            </Button>
          </div>
        </RawForm>
      </div>
    </Modal>
  );

  React.useEffect(() => {
    setFormData(restProps.formData);
  }, [restProps.formData]);

  React.useEffect(() => {
    setCustomSchema(_customSchema);
  }, [_customSchema]);

  return (
    <div className={`form-generator ${className} ${theme}`}>
      <RawForm
        {...restProps}
        formContext={computedFormContext}
        customSchema={customSchema}
        {...(shouldShowPreview
          ? {
              formData,
              onChange: (data) => {
                setFormData(data.formData);
              },
              onSubmit: () => {
                setIsPreviewModalOpen(true);
              },
            }
          : {})}
      >
        <div className="rjf-buttons" {...(restProps.preview ? { style: { display: 'none' } } : {})}>
          <Button type="submit" theme={buttonThemes.THEME_3}>
            {submitLabel}
          </Button>
        </div>
      </RawForm>
      {shouldShowPreview ? previewModal : null}
    </div>
  );
}

FormGenerator.propTypes = formGeneratorPropTypes;

FormGenerator.defaultProps = formGeneratorDefaultPropTypes;

export default FormGenerator;

export { formGeneratorThemes } from './constants';
