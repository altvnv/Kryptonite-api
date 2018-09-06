let ABI = [{"constant":true,"inputs":[{"name":"_num","type":"uint256"}],"name":"getTransaction","outputs":[{"name":"assetaddress","type":"address"},{"name":"buyer","type":"address"},{"name":"seller","type":"address"},{"name":"KTC","type":"uint256"},{"name":"assetoffernumber","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"updateKTCAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"AssetType","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"updateManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_string","type":"string"}],"name":"isValidAssetType","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KTC_Address","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"isKTCAsset","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numberofassets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"Buyer","type":"address"},{"name":"Seller","type":"address"},{"name":"_KTC","type":"uint256"},{"name":"assetoffernumber","type":"uint256"}],"name":"addTrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transactions","outputs":[{"name":"assetaddress","type":"address"},{"name":"buyer","type":"address"},{"name":"seller","type":"address"},{"name":"KTC","type":"uint256"},{"name":"assetoffernumber","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"assetaddresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ktccontract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"assettype","type":"string"}],"name":"DeployAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"assets","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"AssetContract","type":"address"},{"indexed":true,"name":"Buyer","type":"address"},{"indexed":true,"name":"Seller","type":"address"},{"indexed":false,"name":"KTC","type":"uint256"},{"indexed":false,"name":"AssetOfferNumber","type":"uint256"}],"name":"AssetTrade","type":"event"}]

let KTCAssets

window.App = {
    init: function () {
        KTCAssets = web3.eth.Contract(ABI).at('address');
    },

    DeployAsset: function (AssetType) {
        KTCAssets.DeployAsset(AssetType, (error) => {
            console.log(result)
        })
    },    

    isValidAssetType: function (AssetType) {
        KTCAssets.isValidAssetType(AssetType, (error, result) => {
            console.log(result)
        })
    },

    isKTCAsset: function (address) {
        KTCAssets.isKTCAsset(address, (error, result) => {
            console.log(result)
        })
    },

    addTrade: function (Buyer, Seller, KTCAmount, AssetOfferNumber) {
        KTCAssets.isValidAssetType(Buyer, Seller, KTCAmount, AssetOfferNumber, (error, result) => {
            console.log(result)
        })
    },

    getTransaction: function (Tx) {
        KTCAssets.isValidAssetType(Tx, (error, result) => {
            console.log(result)
        })
    }
}
    
    
    
window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
        console.log("MetaMask detected")
        web3 = new Web3(web3.currentProvider);
    } else {
        console.warn("You should use MetaMask or Mist")
        window.alert("You should download MetaMask");
    }
    web3.eth.defaultAccount = web3.eth.accounts[0];
    App.init();
});

