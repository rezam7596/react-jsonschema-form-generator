"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAssignmentAction = exports.getLoyaltyTiers = void 0;

var _fetchMock = _interopRequireDefault(require("fetch-mock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getLoyaltyTiers = _fetchMock["default"].get('https://uber.docker.webdooz.com/api/v2/loyaltyClub/tiers', [{
  type: 'EARTH',
  description: {
    title: 'EARTH title',
    text: 'EARTH text'
  },
  minNumOfRides: 0,
  rideScoreCoefficient: 1,
  subscriptionScoreCoefficient: 1,
  background: {
    color: '#121314',
    image: 'https://picsum.photos/200/300'
  },
  icon: 'https://picsum.photos/200/300',
  id: '5d4ec045976bf45400000000'
}, {
  type: 'MOON',
  description: {
    title: 'MOON title',
    text: 'MOON text'
  },
  minNumOfRides: 5,
  rideScoreCoefficient: 2,
  subscriptionScoreCoefficient: 2,
  background: {
    color: '#345678',
    image: 'https://picsum.photos/200/300'
  },
  icon: 'https://picsum.photos/200/300',
  id: '5d4ec045976bf45400000001'
}, {
  type: 'SUN',
  description: {
    title: 'SUN title',
    text: 'SUN text'
  },
  minNumOfRides: 10,
  rideScoreCoefficient: 3,
  subscriptionScoreCoefficient: 3,
  background: {
    color: '#345678',
    image: 'https://picsum.photos/200/300'
  },
  icon: 'https://picsum.photos/200/300',
  id: '5d4ec045976bf45400000002'
}, {
  type: 'GALAXY',
  description: {
    title: 'GALAXY title',
    text: 'GALAXY text'
  },
  minNumOfRides: 15,
  rideScoreCoefficient: 4,
  subscriptionScoreCoefficient: 4,
  background: {
    color: '#345678',
    image: 'https://picsum.photos/200/300'
  },
  icon: 'https://picsum.photos/200/300',
  id: '5d4ec045976bf45400000003'
}], {
  delay: 10
});

exports.getLoyaltyTiers = getLoyaltyTiers;

var getAssignmentAction = _fetchMock["default"].get('https://uber.docker.webdooz.com/api/v2/subscription/assignment/communicate/5f0f08d6b3ba530006216779', {
  result: 'OK'
}, {
  delay: 100
});

exports.getAssignmentAction = getAssignmentAction;