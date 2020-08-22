export function mergeParameters(paramObj) {
  return Object.entries(paramObj)
    .map(([key]) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(paramObj[key]))}`;
    })
    .join('&');
}

export function getQueriedUrl(baseUrl, parameters) {
  return baseUrl.includes('?') ? `${baseUrl}&${mergeParameters(parameters)}` : `${baseUrl}?${mergeParameters(parameters)}`;
}

export const getUrl = (templateUrl, parameters) => {
  let resultUrl = templateUrl;
  while (/:(\w+)/.test(resultUrl)) {
    const [parameter, parameterName] = /:(\w+)/.exec(resultUrl);
    resultUrl = resultUrl.replace(parameter, parameters[parameterName]);
  }
  return resultUrl;
};

export const getUrlParameters = (templateUrl) => {
  const parameters = [...templateUrl.matchAll(/:(\w+)/g)];
  return parameters.map((parameter) => parameter[1]);
};

function deepGetBfsInternalCalculation(key, queue) {
  if (queue.length === 0) return undefined;
  const currentObj = queue.shift();
  for (const [currentKey, currentValue] of Object.entries(currentObj)) {
    if (currentKey === key) {
      return currentValue;
    }
    if (typeof currentValue === 'object') {
      queue.push(currentValue);
    }
  }
  return deepGetBfsInternalCalculation(key, queue);
}

export const deepGetBfs = (obj, key) => {
  const queue = [{ ...obj }];
  return deepGetBfsInternalCalculation(key, queue);
};

export const getCalculatedUrlBfs = (templateUrl, data) => {
  const parameterKeys = getUrlParameters(templateUrl);
  const parameters = {};
  parameterKeys.forEach((key) => {
    parameters[key] = deepGetBfs(data, key);
  });
  return parameters;
};

const defaultErrorMessage = 'خطای ناشناخته';
export function notifyError(message, defaultMessage = defaultErrorMessage) {
  if (!process.env.BROWSER || typeof toastr !== 'object') {
    return;
  }
  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: 'toast-top-center',
    preventDuplicates: true,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '10000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'slideDown',
    hideMethod: 'slideUp',
  };
  toastr.error(message || defaultMessage, 'خطا');
}
