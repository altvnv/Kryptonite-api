let ABI = [{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"checkAsset","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"AssetNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KTCAssetsAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"AssetType","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"whiteListContractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"paymentRefLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_sharenumber","type":"uint256"}],"name":"removeListing","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_offeramount","type":"uint256"},{"name":"_numberofdays","type":"uint256"},{"name":"_sharenumber","type":"uint256"},{"name":"currency","type":"uint256"}],"name":"Buy_Offer","outputs":[{"name":"","type":"address"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"KTC_Address","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"offers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oldmember","type":"address"},{"name":"_newmember","type":"address"},{"name":"_numbershare","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"_dochash","type":"string"},{"name":"_offernumber","type":"uint256"}],"name":"updateMember","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"assetlistings","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"whitelistcontract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"payments","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transactions","outputs":[{"name":"buyer","type":"address"},{"name":"seller","type":"address"},{"name":"price","type":"uint256"},{"name":"dochash","type":"string"},{"name":"offernumber","type":"uint256"},{"name":"tradecontract","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"isMember","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"},{"name":"_stringdata","type":"string"},{"name":"_numdata","type":"uint256"}],"name":"tokenFallback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ktccontract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"allOffers","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_offeramount","type":"uint256"},{"name":"_numberofdays","type":"uint256"},{"name":"_sharenumber","type":"uint256"},{"name":"currency","type":"uint256"}],"name":"Sell_Offer","outputs":[{"name":"","type":"address"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"offerAddresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_share","type":"uint256"}],"name":"memberShare","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ktcassets","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_assettype","type":"string"},{"name":"KTC","type":"address"},{"name":"_assetnumber","type":"uint256"},{"name":"_ktcassets","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_buyer","type":"address"},{"indexed":false,"name":"share","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"BuyOfferEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_buyer","type":"address"},{"indexed":false,"name":"share","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"SellOfferEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_buyer","type":"address"},{"indexed":false,"name":"_seller","type":"address"},{"indexed":false,"name":"_price","type":"uint256"},{"indexed":false,"name":"_dochash","type":"string"},{"indexed":false,"name":"_offernumber","type":"uint256"}],"name":"AssetTrade","type":"event"}]

let Asset

window.App = {
    init: function () {
        Asset = web3.eth.Contract(ABI).at('address_dynamic');
    },

    checkAsset: function (Position) {
        Asset.checkAsset(Position, (error, result) => {
            console.log(result)
        })
    },    

    isMember: function (Address) {
        Asset.isMember(Address, (error, result) => {
            console.log(result)
        })
    },

    memberShare: function (Share) {
        Asset.memberShare(Share, (error, result) => {
            console.log(result)
        })
    },

    Buy_Offer: function (OfferAmount, NumberOfDays, Sharenumber, Currency) {
        Asset.Buy_Offer(OfferAmount, NumberOfDays, Sharenumber, Currency, (error, result) => {
            console.log(result)
        })
    },

    Sell_Offer: function (OfferAmount, NumberOfDays, Sharenumber, Currency) {
        Asset.Sell_Offer(OfferAmount, NumberOfDays, Sharenumber, Currency, (error, result) => {
            console.log(result)
        })
    },

    updateMember: function (Old, New, Share, Price, Cash, OfferNumber) {
        Asset.updateMember(Old, New, Share, Price, Cash, OfferNumber, (error, result) => {
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

