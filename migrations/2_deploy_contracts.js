var _0xWanliunoToken = artifacts.require("./_0xWanliunoToken.sol");
var _0xTestToken = artifacts.require("./_0xTestToken.sol");

module.exports = function(deployer) {
  deployer.deploy(_0xWanliunoToken);
  deployer.deploy(_0xTestToken);
};
