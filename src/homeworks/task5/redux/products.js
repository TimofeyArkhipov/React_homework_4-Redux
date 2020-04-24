const products = [
    {
        "id": "1",
        "category": "actionCamera",
        "userCategory": "Экшн камеры",
        "name": "Sony Tessar",
        "art": "12345",
        "rating": "4",
        "color": "Черный",
        "brand" : "Sony",
        "img": "https://cdn.comfy.ua/media/catalog/product/cache/4/thumbnail/395x554/9df78eab33525d08d6e5fb8d27136e95/t/3/t3099fds_1.jpg",
        "price": "9000",
        'quantity': '0',
    },
    {
        "id": "2",
        "category": "actionCamera",
        "userCategory": "Экшн камеры",
        "name": "GO PRO Fusion",
        "art": "32421",
        "rating": "4.7",
        "color": "Черный",
        "brand" : "Go Pro",
        "img": "https://skay.ua/60535-thickbox_default/videokamera-gopro-fusion-chdhz-103.jpg",
        "price": "15000",
        'quantity': '0',
    },
    {
        "id": "3",
        "category": "actionCamera",
        "userCategory": "Экшн камеры",
        "name": "Airon ProCam",
        "art": "13275",
        "rating": "5",
        "color": "Белый",
        "brand" : "Airon",
        "img": "https://airon.ua/wp-content/uploads/2019/09/RU_AIRON_PROCAM_7_01_main_photo.jpg",
        "price": "7000",
        'quantity': '0',
    },
];

const productsReduser = (state = products, action)=> {
    return state;
};

export default productsReduser;