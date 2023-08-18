// https://eth-sepolia.g.alchemy.com/v2/jWkocQ4dUw0-jZ_ARMTAjHqzEEfma6km

require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.0",
    networks: {
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/jWkocQ4dUw0-jZ_ARMTAjHqzEEfma6km",
            accounts: [
                "d35f83abd17170af9c514e9221407ecf85b81861c2f2353f0041792327bf0271",
            ],
        },
    },
};
