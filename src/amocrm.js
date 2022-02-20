const AmoCRM = require( 'amocrm-js' );

const crm = new AmoCRM({
    // логин пользователя в портале, где адрес портала domain.amocrm.ru
    domain: 'domain', // может быть указан полный домен вида domain.amocrm.ru, domain.amocrm.com
    /*
      Информация об интеграции (подробности подключения
      описаны на https://www.amocrm.ru/developers/content/oauth/step-by-step)
    */
    auth: {
        client_id: 'a97b653f-d8a7-42fd-9589-11bf555f8ecf', // ID интеграции
        client_secret: 'zNSdYCIiXH5O85Vh8OI00xaH7t86HDhBTToRFOR45yYzOEkFO5HIv8pSQoVji37t', // Секретный ключ
        redirect_uri: 'https://princessmensclub.ua', // Ссылка для перенаправления
        code: 'def50200089e6f0402be4665d143a20b1d175534e4265e11995c2bdda8c2cb4c7394f5a11e10b8aabd0fc4b144125d0f55a015dd6411dea51c66547529e5ccc38e6fd646ef53b5838c09755ff984746ab8a0fafdd5c2a650446aa6f5bc8775e58a4148b94e32bc6ee31cb6cfc6b559335b216e4281eae7fe998c5b21c8f7de1af4881d35671674432012111a25eae79f929f4ca4f538242635ebe09de92fa6b4afaf1b0ac129e9cf96b56123c6955a225cbf34efa5d59665eccb3bb3e85fff7a45db8197ca6c297caf36e4651b6556acfcdb2792c441737f7745da7efa011dd2b5ff81cfa48215ab33e375f0518ece8a6a9a6d8912890eecc158f2ba1a1b940c5618d03cbe67e7753a295fac915e47c24c4fb37147fd0a0d27e17c08decb3908c316df27ff52963fee3355512876380fe285a921fb0905727a3dc6ae559ae8a405be417374174a2ba746edde51aa262e2bc55d6c532cc0b2ba8678abef9d5fc2fbdf5cbc43a0f427466c7394d8cddf4bf37ac4d527896baab3b0ae3b6e6a16f8261ee34e81b398d433a2b72b25e5d4ac9f0c20365725cf35741402bf31577ea71085dac7f46a517aed33e67e6232620c57b5358d2b1d3d4c821b754d334e6008204f580874' // Код авторизации
    },
});