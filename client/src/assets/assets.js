import gs_logo from "./gs_logo.png"
import happy_store from "./happy_store.webp"
import upload_area from "./upload_area.svg"
import img_1 from "./img_1.jpg"
import img_2 from "./img_2.jpg"
import img_3 from "./img_3.jpg"
import pexels_pic from './pexels-dream_-makkerzz-1603229-28347078.jpg'
import profile_pic1 from "./profile_pic1.jpg"
import profile_pic2 from "./profile_pic2.jpg"
import profile_pic3 from "./profile_pic3.jpg"

// Bridal Sets
import bridalset_1 from "./bridalset_1.jpg"
import bridalset_2 from "./bridalset_2.jpg"
import bridalset_3 from "./bridalset_3.jpg"
import bridalset_4 from "./bridalset_4.jpg"

// Diamonds & Solitaires
import diamond_1 from "./diamond_1.jpg"
import diamond_2 from "./diamond_2.jpg"
import diamond_3 from "./diamond_3.jpg"
import diamond_4 from "./diamond_4.jpg"
import diamond_5 from "./diamond_5.jpg"
import diamond_6 from "./diamond_6.jpg"

// Earrings
import earring_1 from "./earring_1.jpg"
import earring_2 from "./earring_2.jpg"
import earring_3 from "./earring_3.jpg"
import earring_4 from "./earring_4.jpg"

// Kangan & Bangles
import kangan_1 from "./kangan_1.jpg"
import kangan_2 from "./kangan_2.jpg"
import kangan_3 from "./kangan_3.jpg"
import kangan_4 from "./kangan_4.jpg"

// Necklaces
import neck_1 from "./neck_1.jpg"
import neck_2 from "./neck_2.jpg"
import neck_3 from "./neck_3.jpg"
import neck_4 from "./neck_4.jpg"

// Rings
import ring_1 from "./ring_1.jpg"
import ring_2 from "./ring_2.jpg"
import ring_3 from "./ring_3.jpg"
import ring_4 from "./ring_4.jpg"

// Complete Sets
import set_1 from "./set_1.jpg"

import { ClockFading as ClockFadingIcon, Headset as HeadsetIcon, Send as SendIcon } from "lucide-react";

const hero_model_img = pexels_pic;
const hero_product_img1 = bridalset_1;
const hero_product_img2 = neck_1;

const product_img1 = neck_1;
const product_img2 = bridalset_1;
const product_img3 = earring_1;
const product_img4 = ring_1;
const product_img5 = kangan_1;
const product_img6 = diamond_1;
const product_img7 = neck_2;
const product_img8 = bridalset_2;
const product_img9 = earring_2;
const product_img10 = ring_2;
const product_img11 = kangan_2;
const product_img12 = diamond_2;
const product_img13 = neck_3;
const product_img14 = bridalset_3;
const product_img15 = earring_3;
const product_img16 = set_1;

export const assets = {
    upload_area,
    hero_model_img,
    hero_product_img1,
    hero_product_img2,
    gs_logo,
    happy_store,
    profile_pic1,
    profile_pic2,
    profile_pic3,
    pexels_pic,
    img_1,
    img_2,
    img_3,
    bridalset_1,
    bridalset_2,
    bridalset_3,
    bridalset_4,
    diamond_1,
    diamond_2,
    diamond_3,
    diamond_4,
    diamond_5,
    diamond_6,
    earring_1,
    earring_2,
    earring_3,
    earring_4,
    kangan_1,
    kangan_2,
    kangan_3,
    kangan_4,
    neck_1,
    neck_2,
    neck_3,
    neck_4,
    ring_1,
    ring_2,
    ring_3,
    ring_4,
    set_1,
    product_img1,
    product_img2,
    product_img3,
    product_img4,
    product_img5,
    product_img6,
    product_img7,
    product_img8,
    product_img9,
    product_img10,
    product_img11,
    product_img12,
    product_img13,
    product_img14,
    product_img15,
    product_img16
}

export const categories = ["Necklaces", "Bridal Sets", "Earrings", "Rings", "Kangan & Bangles", "Diamonds"];

export const dummyRatingsData = [
    { id: "rat_1", rating: 4.9, review: "The Kundan Bridal Set is breathtaking! The intricate gold work and craftsmanship are of royal quality.", user: { name: 'Kristin Watson', image: profile_pic1 }, productId: "prod_1", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Royal Maharani Kundan Bridal Set', category: 'Bridal Sets', id: 'prod_1' } },
    { id: "rat_2", rating: 5.0, review: "Heavy antique gold finish with authentic gemstones. Absolutely stunning on my wedding day.", user: { name: 'Jenny Wilson', image: profile_pic2 }, productId: "prod_2", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Traditional Gold Choker Necklace', category: 'Necklaces', id: 'prod_2' } },
    { id: "rat_3", rating: 4.8, review: "These Jhumkas are super elegant and lightweight to wear despite the heavy royal design.", user: { name: 'Bessie Cooper', image: profile_pic3 }, productId: "prod_3", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Handcrafted Kundan Drop Jhumkas', category: 'Earrings', id: 'prod_3' } },
    { id: "rat_4", rating: 5.0, review: "Pure elegance! The solitaire diamond cut ring has incredible clarity and brilliance.", user: { name: 'Kristin Watson', image: profile_pic1 }, productId: "prod_4", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Solitaire Cut Diamond Engagement Ring', category: 'Rings', id: 'prod_4' } },
    { id: "rat_5", rating: 4.7, review: "The bangles have a rich vintage gold polish and fit perfectly. Excellent quality.", user: { name: 'Jenny Wilson', image: profile_pic2 }, productId: "prod_5", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Antique Gold Plated Kangan Pair', category: 'Kangan & Bangles', id: 'prod_5' } },
    { id: "rat_6", rating: 5.0, review: "Sagar Ratna always delivers authentic precious jewels with certification!", user: { name: 'Bessie Cooper', image: profile_pic3 }, productId: "prod_6", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Certified Brilliant Cut Diamond Pendant', category: 'Diamonds', id: 'prod_6' } },
]

export const dummyStoreData = {
    id: "store_1",
    userId: "user_1",
    name: "Sagar Ratna Jewels",
    description: "At Sagar Ratna Jewels, we offer handcrafted gold, kundan, polki, solitaire diamonds, and precious gemstone jewelry designed to bring timeless grandeur to your special occasions.",
    username: "sagarratnajewels",
    address: "12 Jewelers Arcade, Johari Bazaar, Jaipur, RJ, IN",
    status: "approved",
    isActive: true,
    logo: happy_store,
    email: "contact@sagarratna.com",
    contact: "+91 9876543210",
    createdAt: "2025-09-04T09:04:16.189Z",
    updatedAt: "2025-09-04T09:04:44.273Z",
    user: {
        id: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "Sagar Ratna",
        email: "info@sagarratna.com",
        image: gs_logo,
    }
}

export const productDummyData = [
    {
        id: "prod_1",
        name: "Royal Maharani Kundan Bridal Set",
        description: "Exquisite Kundan bridal necklace set embedded with high-grade emerald beads, maang tikka, and matching earrings.",
        mrp: 890,
        price: 699,
        images: [bridalset_1, bridalset_2, bridalset_3, bridalset_4],
        category: "Bridal Sets",
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_2",
        name: "Grand Royal Heritage Bridal Collection",
        description: "Full heritage bridal necklace set crafted with gold embellishments, uncut polki diamonds, and pearl tassels.",
        mrp: 990,
        price: 799,
        images: [bridalset_2, bridalset_1, pexels_pic],
        category: "Bridal Sets",
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_3",
        name: "Antique Temple Gold Necklace",
        description: "Intricately carved traditional temple gold necklace featuring divine craftsmanship and rich gold plating.",
        mrp: 450,
        price: 349,
        images: [neck_1, neck_2, neck_3],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Necklaces",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_4",
        name: "Polki Emerald & Ruby Choker",
        description: "Stunning Polki style necklace embedded with synthetic rubies, emerald beads, and lustrous pearl drops.",
        mrp: 520,
        price: 419,
        images: [neck_2, neck_4, set_1],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Necklaces",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 26 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 26 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_5",
        name: "Solitaire Cut Diamond Engagement Ring",
        description: "Certified round brilliant solitaire diamond set in 18k white gold band for engagement and special moments.",
        mrp: 350,
        price: 279,
        images: [ring_1, ring_2, ring_3],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Rings",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_6",
        name: "Royal Emerald Cut Diamond Ring",
        description: "Elegant emerald cut diamond halo ring crafted in solid platinum with sparkling side accents.",
        mrp: 410,
        price: 329,
        images: [ring_2, ring_4],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Rings",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_7",
        name: "Handcrafted Kundan Drop Jhumkas",
        description: "Traditional handcrafted Kundan Jhumkas featuring pearl drop tassels and intricate filigree work.",
        mrp: 180,
        price: 139,
        images: [earring_1, earring_2, earring_3],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Earrings",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 24 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 24 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_8",
        name: "Chandbali Gold Plated Earrings",
        description: "Classic South Indian style Chandbali earrings with pearl border hangings and enamel details.",
        mrp: 160,
        price: 119,
        images: [earring_2, earring_4],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Earrings",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 23 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 23 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_9",
        name: "Antique Gold Plated Kangan Pair",
        description: "Heavy antique gold finish kada bangles set of 2 decorated with peacock and floral motifs.",
        mrp: 290,
        price: 219,
        images: [kangan_1, kangan_2, kangan_3],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Kangan & Bangles",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 22 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 22 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_10",
        name: "Kundan Studded Royal Bangle Set",
        description: "Set of 4 handcrafted Kundan bangles with velvet red background inlay and gold plating.",
        mrp: 320,
        price: 249,
        images: [kangan_2, kangan_4],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Kangan & Bangles",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 21 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 21 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_11",
        name: "Certified Brilliant Cut Diamond Pendant",
        description: "Certified round brilliant cut diamond set in 18k yellow gold solitaire chain pendant.",
        mrp: 490,
        price: 389,
        images: [diamond_1, diamond_2, diamond_3],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Diamonds",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_12",
        name: "Princess Cut Diamond Stud Earrings",
        description: "Pair of classic princess cut diamond studs mounted in 4-prong setting with push back closure.",
        mrp: 390,
        price: 299,
        images: [diamond_4, diamond_5, diamond_6],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Diamonds",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
    }
];

export const ourSpecsData = [
    { title: "Free Insured Shipping", description: "Enjoy fast, fully insured delivery on every order with no extra conditions.", icon: SendIcon, accent: '#05DF72' },
    { title: "7 Days Easy Return", description: "Change your mind? No worries. Return any item safely within 7 days.", icon: ClockFadingIcon, accent: '#FF8904' },
    { title: "24/7 Expert Support", description: "We're here for you. Get expert assistance with our customer care.", icon: HeadsetIcon, accent: '#A684FF' }
]

export const addressDummyData = {
    id: "addr_1",
    userId: "user_1",
    name: "John Doe",
    email: "johndoe@example.com",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
    phone: "1234567890",
    createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
}

export const couponDummyData = [
    { code: "NEW20", description: "20% Off for New Users", discount: 20, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:31.183Z" },
    { code: "NEW10", description: "10% Off for New Users", discount: 10, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:50.653Z" },
    { code: "OFF20", description: "20% Off for All Users", discount: 20, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:00.811Z" },
    { code: "OFF10", description: "10% Off for All Users", discount: 10, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:21.279Z" },
    { code: "PLUS10", description: "20% Off for Members", discount: 10, forNewUser: false, forMember: true, isPublic: false, expiresAt: "2027-03-06T00:00:00.000Z", createdAt: "2025-08-22T11:38:20.194Z" }
]

export const dummyUserData = {
    id: "user_31dQbH27HVtovbs13X2cmqefddM",
    name: "Sagar Ratna",
    email: "sagrikathakur68@gmail.com",
    image: gs_logo,
    cart: {}
}

export const orderDummyData = [
    {
        id: "cmemm75h5001jtat89016h1p3",
        total: 1498,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "cmemkqnzm000htat8u7n8cpte",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:15:03.929Z",
        updatedAt: "2025-08-22T09:15:50.723Z",
        isCouponUsed: true,
        coupon: couponDummyData[2],
        orderItems: [
            { orderId: "cmemm75h5001jtat89016h1p3", productId: "prod_1", quantity: 1, price: 699, product: productDummyData[0], },
            { orderId: "cmemm75h5001jtat89016h1p3", productId: "prod_2", quantity: 1, price: 799, product: productDummyData[1], }
        ],
        address: addressDummyData,
        user: dummyUserData
    },
    {
        id: "cmemm6jv7001htat8vmm3gxaf",
        total: 1047,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "cmemkqnzm000htat8u7n8cpte",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:14:35.923Z",
        updatedAt: "2025-08-22T09:15:52.535Z",
        isCouponUsed: true,
        coupon: couponDummyData[0],
        orderItems: [
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "prod_3", quantity: 1, price: 349, product: productDummyData[2], },
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "prod_4", quantity: 1, price: 419, product: productDummyData[3], },
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "prod_5", quantity: 1, price: 279, product: productDummyData[4], }
        ],
        address: addressDummyData,
        user: dummyUserData
    }
]

export const storesDummyData = [
    {
        id: "cmemkb98v0001tat8r1hiyxhn",
        userId: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "Sagar Ratna",
        description: "Sagar Ratna is your premier destination for precious gemstones, authentic gold, solitaire diamonds, and traditional jewelry.",
        username: "sagarratna",
        address: "12 Jewelers Arcade, Johari Bazaar, Jaipur, RJ, IN",
        status: "approved",
        isActive: true,
        logo: gs_logo,
        email: "sagrikathakur68@gmail.com",
        contact: "+91 9876543210",
        createdAt: "2025-08-22T08:22:16.189Z",
        updatedAt: "2025-08-22T08:22:44.273Z",
        user: dummyUserData,
    },
    {
        id: "cmemkqnzm000htat8u7n8cpte",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        name: "Sagar Ratna Jewels",
        description: "At Sagar Ratna Jewels, we believe shopping for precious jewelry should be authentic, elegant, and satisfying.",
        username: "sagarratnajewels",
        address: "12 Jewelers Arcade, Johari Bazaar, Jaipur, RJ, IN",
        status: "approved",
        isActive: true,
        logo: happy_store,
        email: "contact@sagarratna.com",
        contact: "+91 9876543210",
        createdAt: "2025-08-22T08:34:15.155Z",
        updatedAt: "2025-08-22T08:34:47.162Z",
        user: dummyUserData,
    }
]

export const dummyAdminDashboardData = {
    "orders": 6,
    "stores": 2,
    "products": 12,
    "revenue": "2545.10",
    "allOrders": [
        { "createdAt": "2025-08-20T08:46:58.239Z", "total": 345.6 },
        { "createdAt": "2025-08-22T08:46:21.818Z", "total": 297.2 },
        { "createdAt": "2025-08-22T08:45:59.587Z", "total": 154.4 },
        { "createdAt": "2025-08-23T09:15:03.929Z", "total": 1498.0 },
        { "createdAt": "2025-08-23T09:14:35.923Z", "total": 1047.0 },
        { "createdAt": "2025-08-23T11:44:29.713Z", "total": 279.0 },
        { "createdAt": "2025-08-24T09:15:03.929Z", "total": 1498.0 },
        { "createdAt": "2025-08-24T09:14:35.923Z", "total": 1047.0 },
        { "createdAt": "2025-08-24T11:44:29.713Z", "total": 279.0 },
        { "createdAt": "2025-08-24T11:56:29.713Z", "total": 349.0 },
        { "createdAt": "2025-08-25T11:44:29.713Z", "total": 279.0 },
        { "createdAt": "2025-08-25T09:15:03.929Z", "total": 1498.0 },
        { "createdAt": "2025-08-25T09:14:35.923Z", "total": 1047.0 },
        { "createdAt": "2025-08-25T11:44:29.713Z", "total": 279.0 },
        { "createdAt": "2025-08-25T11:56:29.713Z", "total": 349.0 },
        { "createdAt": "2025-08-25T11:30:29.713Z", "total": 419.0 }
    ]
}

export const dummyStoreDashboardData = {
    "ratings": dummyRatingsData,
    "totalOrders": 2,
    "totalEarnings": 2545,
    "totalProducts": 12
}
