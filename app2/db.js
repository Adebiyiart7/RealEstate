export const featured = [
  {
    _id: "2",
    image: "https://picsum.photos/300/400",
    name: "Zenith Apartments",
    state: "Lagos",
    location: "No 6 St. Michael street, Lagos, Nigeria.",
    map: "",
    cost: 64000,
    duration: "night",
    rating: 4.9
  },
  {
    _id: "1",
    image: "https://picsum.photos/290/400",
    name: "Kings and Queens Apartments",
    state: "Abuja",
    location: "No 6 St. Michael street, Abuja, Nigeria.",
    map: "",
    cost: 480000,
    duration: "night",
    rating: 4.7
  },
  {
    _id: "3",
    image: "https://picsum.photos/280/400",
    name: "Gwarimpa Estate",
    state: "Abuja",
    location: "No 6 St. Michael street, Abuja, Nigeria.",
    map: "",
    cost: 11000000,
    duration: "year",
    rating: 5.0
  },
  {
    _id: "4",
    image: "https://picsum.photos/270/400",
    name: "Adewale Hotels",
    state: "Akure",
    location: "No 6 St. Michael street, Akure, Nigeria.",
    map: "",
    cost: 35000,
    duration: "night",
    rating: 4.7
  }
];

export const estates = [
  {
    _id: "1",
    category: "House",
    image: "https://picsum.photos/304",
    name: "Adewale Hotels",
    state: "Akure",
    location: "No 6 St. Michael street, Akure, Nigeria.",
    map: "",
    cost: 35000,
    duration: "night",
    rating: 4.7,
    reviewCount: 1234,
    beds: 8,
    bath: 4,
    area: "3750 sqft",
    owner: {
      name: "Chibuike Adewale Suleiman",
      image: require("./assets/images/avatar.jpg"),
      phone: "09029242729"
    },
    overview:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    facilities: [
      { name: "Car Parking", icon: "parking" },
      { name: "Swimming Pool", icon: "swimming" },
      { name: "Gym & Fitness", icon: "gym" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Wi-fi & Network", icon: "wifi" },
      { name: "Pet Center", icon: "pet" },
      { name: "Sport Center", icon: "sport" },
      { name: "Laundry", icon: "laundry" }
    ],
    images: [
      "https://picsum.photos/300",
      "https://picsum.photos/301",
      "https://picsum.photos/302",
      "https://picsum.photos/303",
      "https://picsum.photos/304",
      "https://picsum.photos/305",
      "https://picsum.photos/306",
      "https://picsum.photos/307",
      "https://picsum.photos/308",
      "https://picsum.photos/309",
      "https://picsum.photos/310"
    ],
    reviews: [
      {
        author: {
          name: "Ibrahim Ngozi",
          image: require("./assets/images/avatar.jpg")
        },
        comment:
          "The apartment is very nice, clean and modern. I really like the interior design. Looks like I'll feel at home.",

        favorites: 886,
        star: 5,
        timestamp: 1671375843703
      }
    ]
  },
  {
    _id: "2",
    category: "Estate",
    image: "https://picsum.photos/305",
    name: "Biyi Homes",
    state: "Abuja",
    location: "No 6 St. Michael street, Abuja, Nigeria.",
    map: "",
    cost: 90000,
    duration: "night",
    rating: 4.7,
    reviewCount: 1234,
    beds: 8,
    bath: 4,
    area: "3750 sqft",
    owner: {
      name: "Chibuike Adewale Suleiman",
      image: require("./assets/images/avatar.jpg"),
      phone: "09029242729"
    },
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores cupiditate sunt voluptate voluptatibus perferendis cumque molestias, numquam similique, delectus natus! Alias hic ex odit similique consequuntur atque. Atque, nisi.",
    facilities: [
      { name: "Car Parking", icon: "parking" },
      { name: "Swimming Pool", icon: "swimming" },
      { name: "Gym & Fitness", icon: "gym" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Wi-fi & Network", icon: "wifi" },
      { name: "Pet Center", icon: "pet" },
      { name: "Sport Center", icon: "sport" },
      { name: "Laundry", icon: "laundry" }
    ],
    images: [
      "https://picsum.photos/300",
      "https://picsum.photos/301",
      "https://picsum.photos/302",
      "https://picsum.photos/303",
      "https://picsum.photos/304",
      "https://picsum.photos/305",
      "https://picsum.photos/306",
      "https://picsum.photos/307",
      "https://picsum.photos/308",
      "https://picsum.photos/309",
      "https://picsum.photos/310"
    ],
    reviews: [
      {
        _id: "1",
        author: {
          name: "Ibrahim Ngozi",
          image: require("./assets/images/avatar.jpg")
        },
        comment:
          "The apartment is very nice, clean and modern. I really like the interior design. Looks like I'll feel at home.",

        favorites: 886,
        star: 5,
        timestamp: 1671375843703
      }
    ]
  },
  {
    _id: "3",
    category: "Villa",
    image: "https://picsum.photos/301",
    name: "Kings Hotels",
    state: "Ikeja",
    location: "No 6 St. Michael street, Ikeja, Nigeria.",
    map: "",
    cost: 46000,
    duration: "night",
    rating: 4.8,
    reviewCount: 1234,
    beds: 8,
    bath: 4,
    area: "3750 sqft",
    owner: {
      name: "Chibuike Adewale Suleiman",
      image: require("./assets/images/avatar.jpg"),
      phone: "09029242729"
    },
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores cupiditate sunt voluptate voluptatibus perferendis cumque molestias, numquam similique, delectus natus! Alias hic ex odit similique consequuntur atque. Atque, nisi.",
    facilities: [
      { name: "Car Parking", icon: "parking" },
      { name: "Swimming Pool", icon: "swimming" },
      { name: "Gym & Fitness", icon: "gym" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Wi-fi & Network", icon: "wifi" },
      { name: "Pet Center", icon: "pet" },
      { name: "Sport Center", icon: "sport" },
      { name: "Laundry", icon: "laundry" }
    ],
    images: [
      "https://picsum.photos/300",
      "https://picsum.photos/301",
      "https://picsum.photos/302",
      "https://picsum.photos/303",
      "https://picsum.photos/304",
      "https://picsum.photos/305",
      "https://picsum.photos/306",
      "https://picsum.photos/307",
      "https://picsum.photos/308",
      "https://picsum.photos/309",
      "https://picsum.photos/310"
    ],
    reviews: [
      {
        author: {
          name: "Ibrahim Ngozi",
          image: require("./assets/images/avatar.jpg")
        },
        comment:
          "The apartment is very nice, clean and modern. I really like the interior design. Looks like I'll feel at home.",

        favorites: 886,
        star: 5,
        timestamp: 1671375843703
      }
    ]
  },
  {
    _id: "4",
    category: "House",
    image: "https://picsum.photos/302",
    name: "Zenith Apartment",
    state: "Enugu",
    location: "No 6 St. Michael street, Enugu, Nigeria.",
    map: "",
    cost: 28000,
    duration: "night",
    rating: 4.7,
    reviewCount: 1234,
    beds: 8,
    bath: 4,
    area: "3750 sqft",
    owner: {
      name: "Chibuike Adewale Suleiman",
      image: require("./assets/images/avatar.jpg"),
      phone: "09029242729"
    },
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores cupiditate sunt voluptate voluptatibus perferendis cumque molestias, numquam similique, delectus natus! Alias hic ex odit similique consequuntur atque. Atque, nisi.",
    facilities: [
      { name: "Car Parking", icon: "parking" },
      { name: "Swimming Pool", icon: "swimming" },
      { name: "Gym & Fitness", icon: "gym" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Wi-fi & Network", icon: "wifi" },
      { name: "Pet Center", icon: "pet" },
      { name: "Sport Center", icon: "sport" },
      { name: "Laundry", icon: "laundry" }
    ],
    images: [
      "https://picsum.photos/300",
      "https://picsum.photos/301",
      "https://picsum.photos/302",
      "https://picsum.photos/303",
      "https://picsum.photos/304",
      "https://picsum.photos/305",
      "https://picsum.photos/306",
      "https://picsum.photos/307",
      "https://picsum.photos/308",
      "https://picsum.photos/309",
      "https://picsum.photos/310"
    ],
    reviews: [
      {
        author: {
          name: "Ibrahim Ngozi",
          image: require("./assets/images/avatar.jpg")
        },
        comment:
          "The apartment is very nice, clean and modern. I really like the interior design. Looks like I'll feel at home.",

        favorites: 886,
        star: 5,
        timestamp: 1671375843703
      }
    ]
  },
  {
    _id: "5",
    category: "Apartment",
    image: "https://picsum.photos/303",
    name: "Smith Hotels",
    state: "Nasarawa",
    location: "No 6 St. Michael street, Nasarawa, Nigeria.",
    map: "",
    cost: 44000,
    duration: "night",
    rating: 4.3,
    reviewCount: 1234,
    beds: 8,
    bath: 4,
    area: "3750 sqft",
    owner: {
      name: "Chibuike Adewale Suleiman",
      image: require("./assets/images/avatar.jpg"),
      phone: "09029242729"
    },
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores cupiditate sunt voluptate voluptatibus perferendis cumque molestias, numquam similique, delectus natus! Alias hic ex odit similique consequuntur atque. Atque, nisi.",
    facilities: [
      { name: "Car Parking", icon: "parking" },
      { name: "Swimming Pool", icon: "swimming" },
      { name: "Gym & Fitness", icon: "gym" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Wi-fi & Network", icon: "wifi" },
      { name: "Pet Center", icon: "pet" },
      { name: "Sport Center", icon: "sport" },
      { name: "Laundry", icon: "laundry" }
    ],
    images: [
      "https://picsum.photos/300",
      "https://picsum.photos/301",
      "https://picsum.photos/302",
      "https://picsum.photos/303",
      "https://picsum.photos/304",
      "https://picsum.photos/305",
      "https://picsum.photos/306",
      "https://picsum.photos/307",
      "https://picsum.photos/308",
      "https://picsum.photos/309",
      "https://picsum.photos/310"
    ],
    reviews: [
      {
        author: {
          name: "Ibrahim Ngozi",
          image: require("./assets/images/avatar.jpg")
        },
        comment:
          "The apartment is very nice, clean and modern. I really like the interior design. Looks like I'll feel at home.",

        favorites: 886,
        star: 5,
        timestamp: 1671375843703
      }
    ]
  },
  {
    _id: "6",
    category: "Estate",
    image: "https://picsum.photos/300",
    name: "International Hotels",
    state: "Kogi",
    location: "No 6 St. Michael street, Kogi, Nigeria.",
    map: "",
    cost: 55000,
    duration: "night",
    rating: 4.5,
    reviewCount: 1234,
    beds: 8,
    bath: 4,
    area: "3750 sqft",
    owner: {
      name: "Chibuike Adewale Suleiman",
      image: require("./assets/images/avatar.jpg"),
      phone: "09029242729"
    },
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores cupiditate sunt voluptate voluptatibus perferendis cumque molestias, numquam similique, delectus natus! Alias hic ex odit similique consequuntur atque. Atque, nisi.",
    facilities: [
      { name: "Car Parking", icon: "parking" },
      { name: "Swimming Pool", icon: "swimming" },
      { name: "Gym & Fitness", icon: "gym" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Wi-fi & Network", icon: "wifi" },
      { name: "Pet Center", icon: "pet" },
      { name: "Sport Center", icon: "sport" },
      { name: "Laundry", icon: "laundry" }
    ],
    images: [
      "https://picsum.photos/300",
      "https://picsum.photos/301",
      "https://picsum.photos/302",
      "https://picsum.photos/303",
      "https://picsum.photos/304",
      "https://picsum.photos/305",
      "https://picsum.photos/306",
      "https://picsum.photos/307",
      "https://picsum.photos/308",
      "https://picsum.photos/309",
      "https://picsum.photos/310"
    ],
    reviews: [
      {
        author: {
          name: "Ibrahim Ngozi",
          image: require("./assets/images/avatar.jpg")
        },
        comment:
          "The apartment is very nice, clean and modern. I really like the interior design. Looks like I'll feel at home.",

        favorites: 886,
        star: 5,
        timestamp: 1671375843703
      }
    ]
  },
  {
    _id: "7",
    category: "Villa",
    image: "https://picsum.photos/310",
    name: "Travellers Hotels",
    state: "Minna",
    location: "No 6 St. Michael street, Minna, Nigeria.",
    map: "",
    cost: 35000,
    duration: "night",
    rating: 4.8,
    reviewCount: 1234,
    beds: 8,
    bath: 4,
    area: "3750 sqft",
    owner: {
      name: "Chibuike Adewale Suleiman",
      image: require("./assets/images/avatar.jpg"),
      phone: "09029242729"
    },
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores cupiditate sunt voluptate voluptatibus perferendis cumque molestias, numquam similique, delectus natus! Alias hic ex odit similique consequuntur atque. Atque, nisi.",
    facilities: [
      { name: "Car Parking", icon: "parking" },
      { name: "Swimming Pool", icon: "swimming" },
      { name: "Gym & Fitness", icon: "gym" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Wi-fi & Network", icon: "wifi" },
      { name: "Pet Center", icon: "pet" },
      { name: "Sport Center", icon: "sport" },
      { name: "Laundry", icon: "laundry" }
    ],
    images: [
      "https://picsum.photos/300",
      "https://picsum.photos/301",
      "https://picsum.photos/302",
      "https://picsum.photos/303",
      "https://picsum.photos/304",
      "https://picsum.photos/305",
      "https://picsum.photos/306",
      "https://picsum.photos/307",
      "https://picsum.photos/308",
      "https://picsum.photos/309",
      "https://picsum.photos/310"
    ],
    reviews: [
      {
        author: {
          name: "Ibrahim Ngozi",
          image: require("./assets/images/avatar.jpg")
        },
        comment:
          "The apartment is very nice, clean and modern. I really like the interior design. Looks like I'll feel at home.",

        favorites: 886,
        star: 5,
        timestamp: 1671375843703
      }
    ]
  },
  {
    _id: "8",
    category: "House",
    image: "https://picsum.photos/306",
    name: "Portable Homes",
    state: "Abuja",
    location: "No 6 St. Michael street, Abuja, Nigeria.",
    map: "",
    cost: 35000,
    duration: "night",
    rating: 4.1,
    reviewCount: 1234,
    beds: 8,
    bath: 4,
    area: "3750 sqft",
    owner: {
      name: "Chibuike Adewale Suleiman",
      image: require("./assets/images/avatar.jpg"),
      phone: "09029242729"
    },
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores cupiditate sunt voluptate voluptatibus perferendis cumque molestias, numquam similique, delectus natus! Alias hic ex odit similique consequuntur atque. Atque, nisi.",
    facilities: [
      { name: "Car Parking", icon: "parking" },
      { name: "Swimming Pool", icon: "swimming" },
      { name: "Gym & Fitness", icon: "gym" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Wi-fi & Network", icon: "wifi" },
      { name: "Pet Center", icon: "pet" },
      { name: "Sport Center", icon: "sport" },
      { name: "Laundry", icon: "laundry" }
    ],
    images: [
      "https://picsum.photos/300",
      "https://picsum.photos/301",
      "https://picsum.photos/302",
      "https://picsum.photos/303",
      "https://picsum.photos/304",
      "https://picsum.photos/305",
      "https://picsum.photos/306",
      "https://picsum.photos/307",
      "https://picsum.photos/308",
      "https://picsum.photos/309",
      "https://picsum.photos/310"
    ],
    reviews: [
      {
        author: {
          name: "Ibrahim Ngozi",
          image: require("./assets/images/avatar.jpg")
        },
        comment:
          "The apartment is very nice, clean and modern. I really like the interior design. Looks like I'll feel at home.",

        favorites: 886,
        star: 5,
        timestamp: 1671375843703
      }
    ]
  },
  {
    _id: "9",
    category: "Apartment",
    image: "https://picsum.photos/307",
    name: "Unique Homes",
    state: "Edo",
    location: "No 6 St. Michael street, Edo, Nigeria.",
    map: "",
    cost: 59000,
    duration: "night",
    rating: 4.4,
    reviewCount: 1234,
    beds: 8,
    bath: 4,
    area: "3750 sqft",
    owner: {
      name: "Chibuike Adewale Suleiman",
      image: require("./assets/images/avatar.jpg"),
      phone: "09029242729"
    },
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores cupiditate sunt voluptate voluptatibus perferendis cumque molestias, numquam similique, delectus natus! Alias hic ex odit similique consequuntur atque. Atque, nisi.",
    facilities: [
      { name: "Car Parking", icon: "parking" },
      { name: "Swimming Pool", icon: "swimming" },
      { name: "Gym & Fitness", icon: "gym" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Wi-fi & Network", icon: "wifi" },
      { name: "Pet Center", icon: "pet" },
      { name: "Sport Center", icon: "sport" },
      { name: "Laundry", icon: "laundry" }
    ],
    images: [
      "https://picsum.photos/300",
      "https://picsum.photos/301",
      "https://picsum.photos/302",
      "https://picsum.photos/303",
      "https://picsum.photos/304",
      "https://picsum.photos/305",
      "https://picsum.photos/306",
      "https://picsum.photos/307",
      "https://picsum.photos/308",
      "https://picsum.photos/309",
      "https://picsum.photos/310"
    ],
    reviews: [
      {
        author: {
          name: "Ibrahim Ngozi",
          image: require("./assets/images/avatar.jpg")
        },
        comment:
          "The apartment is very nice, clean and modern. I really like the interior design. Looks like I'll feel at home.",

        favorites: 886,
        star: 5,
        timestamp: 1671375843703
      }
    ]
  },
  {
    _id: "10",
    category: "Estate",
    image: "https://picsum.photos/308",
    name: "Senetors Hotels",
    state: "Benin",
    location: "No 6 St. Michael street, Benin, Nigeria.",
    map: "",
    cost: 95000,
    duration: "night",
    rating: 4.9,
    reviewCount: 1234,
    beds: 8,
    bath: 4,
    area: "3750 sqft",
    owner: {
      name: "Chibuike Adewale Suleiman",
      image: require("./assets/images/avatar.jpg"),
      phone: "09029242729"
    },
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores cupiditate sunt voluptate voluptatibus perferendis cumque molestias, numquam similique, delectus natus! Alias hic ex odit similique consequuntur atque. Atque, nisi.",
    facilities: [
      { name: "Car Parking", icon: "parking" },
      { name: "Swimming Pool", icon: "swimming" },
      { name: "Gym & Fitness", icon: "gym" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Wi-fi & Network", icon: "wifi" },
      { name: "Pet Center", icon: "pet" },
      { name: "Sport Center", icon: "sport" },
      { name: "Laundry", icon: "laundry" }
    ],
    images: [
      "https://picsum.photos/300",
      "https://picsum.photos/301",
      "https://picsum.photos/302",
      "https://picsum.photos/303",
      "https://picsum.photos/304",
      "https://picsum.photos/305",
      "https://picsum.photos/306",
      "https://picsum.photos/307",
      "https://picsum.photos/308",
      "https://picsum.photos/309",
      "https://picsum.photos/310"
    ],
    reviews: [
      {
        author: {
          name: "Ibrahim Ngozi",
          image: require("./assets/images/avatar.jpg")
        },
        comment:
          "The apartment is very nice, clean and modern. I really like the interior design. Looks like I'll feel at home.",

        favorites: 886,
        star: 5,
        timestamp: 1671375843703
      }
    ]
  },
  {
    _id: "11",
    category: "Villa",
    image: "https://picsum.photos/309",
    name: "Banana Hotels",
    state: "Ogun",
    location: "No 6 St. Michael street, Ogun, Nigeria.",
    map: "",
    cost: 26000,
    duration: "night",
    rating: 4.2,
    reviewCount: 1234,
    beds: 8,
    bath: 4,
    area: "3750 sqft",
    owner: {
      name: "Chibuike Adewale Suleiman",
      image: require("./assets/images/avatar.jpg"),
      phone: "09029242729"
    },
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores cupiditate sunt voluptate voluptatibus perferendis cumque molestias, numquam similique, delectus natus! Alias hic ex odit similique consequuntur atque. Atque, nisi.",
    facilities: [
      { name: "Car Parking", icon: "parking" },
      { name: "Swimming Pool", icon: "swimming" },
      { name: "Gym & Fitness", icon: "gym" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Wi-fi & Network", icon: "wifi" },
      { name: "Pet Center", icon: "pet" },
      { name: "Sport Center", icon: "sport" },
      { name: "Laundry", icon: "laundry" }
    ],
    images: [
      "https://picsum.photos/300",
      "https://picsum.photos/301",
      "https://picsum.photos/302",
      "https://picsum.photos/303",
      "https://picsum.photos/304",
      "https://picsum.photos/305",
      "https://picsum.photos/306",
      "https://picsum.photos/307",
      "https://picsum.photos/308",
      "https://picsum.photos/309",
      "https://picsum.photos/310"
    ],
    reviews: [
      {
        author: {
          name: "Ibrahim Ngozi",
          image: require("./assets/images/avatar.jpg")
        },
        comment:
          "The apartment is very nice, clean and modern. I really like the interior design. Looks like I'll feel at home.",

        favorites: 886,
        star: 5,
        timestamp: 1671375843703
      }
    ]
  },
  {
    _id: "12",
    category: "House",
    image: "https://picsum.photos/310",
    name: "Classic Homes",
    state: "Osun",
    location: "No 6 St. Michael street, Osun, Nigeria.",
    map: "",
    cost: 69000,
    duration: "night",
    rating: 4.6,
    reviewCount: 1234,
    beds: 8,
    bath: 4,
    area: "3750 sqft",
    owner: {
      name: "Chibuike Adewale Suleiman",
      image: require("./assets/images/avatar.jpg"),
      phone: "09029242729"
    },
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores cupiditate sunt voluptate voluptatibus perferendis cumque molestias, numquam similique, delectus natus! Alias hic ex odit similique consequuntur atque. Atque, nisi.",
    facilities: [
      { name: "Car Parking", icon: "parking" },
      { name: "Swimming Pool", icon: "swimming" },
      { name: "Gym & Fitness", icon: "gym" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Wi-fi & Network", icon: "wifi" },
      { name: "Pet Center", icon: "pet" },
      { name: "Sport Center", icon: "sport" },
      { name: "Laundry", icon: "laundry" }
    ],
    images: [
      "https://picsum.photos/300",
      "https://picsum.photos/301",
      "https://picsum.photos/302",
      "https://picsum.photos/303",
      "https://picsum.photos/304",
      "https://picsum.photos/305",
      "https://picsum.photos/306",
      "https://picsum.photos/307",
      "https://picsum.photos/308",
      "https://picsum.photos/309",
      "https://picsum.photos/310"
    ],
    reviews: [
      {
        author: {
          name: "Ibrahim Ngozi",
          image: require("./assets/images/avatar.jpg")
        },
        comment:
          "The apartment is very nice, clean and modern. I really like the interior design. Looks like I'll feel at home.",

        favorites: 886,
        star: 5,
        timestamp: 1671375843703
      }
    ]
  }
];

export const notifications = [
  {
    _id: "1",
    type: "booking",
    title: "Booking Successful!",
    message:
      "Congratulations! You have successfully booked a house for 3 days for NGN65,000. Enjoy the services!",
    timestamp: 1671112131985,
    isNew: true
  },
  {
    _id: "2",
    type: "booking",
    title: "Booking Successful!",
    message:
      "Congratulations! You have successfully booked a house for 3 days for NGN65,000. Enjoy the services!",
    timestamp: 1671012031985,
    isNew: true
  },

  {
    _id: "4",
    type: "new",
    title: "New Services Available!",
    message:
      "You can now make multiple book real estate at once. You can also cancelyour booking.",
    timestamp: 1670911831985,
    isNew: false
  },
  {
    _id: "3",
    type: "booking",
    title: "Booking Successful!",
    message:
      "Congratulations! You have successfully booked a villa for 5 days for NGN875,000. Enjoy the services!",
    timestamp: 1670811831985,
    isNew: false
  },
  {
    _id: "5",
    type: "card",
    title: "Credit Card Connected!",
    message:
      "You credit card has been successfully linked with your account. Enjoy our services!",
    timestamp: 1670711731985,
    isNew: false
  },
  {
    _id: "6",
    type: "user",
    title: "user",
    message:
      "Your account creation is successful, you can now experience our services",
    timestamp: 1670611631985,
    isNew: false
  },
  {
    _id: "7",
    type: "user",
    title: "user",
    message:
      "Your account creation is successful, you can now experience our services",
    timestamp: 1670611631985,
    isNew: false
  },
  {
    _id: "8",
    type: "user",
    title: "user",
    message:
      "Your account creation is successful, you can now experience our services",
    timestamp: 1670611631985,
    isNew: false
  }
];

export const estateCategory = [
  { name: "All", icon: "check-decagram" },
  { name: "House" },
  { name: "Villa" },
  { name: "Estate" },
  { name: "Apartment" }
];

export const chats = [
  {
    _id: "1",
    me: {
      avatar: require("./assets/images/avatar.jpg"),
      fullname: "Adeeyo Joseph Adebiyi"
    },
    secondPerson: {
      avatar: { uri: "https://randomuser.me/portraits/thumb/men/70.jpg" },
      fullname: "Abdulkadir Attahiru"
    },
    lastMessage:
      "I'm so glad we have brown cows, otherwise there wouldn’t be any chocolate milk.",
    lastMessageDateTime: 1673698875553,
    unReadMessagesCount: 0
  },
  {
    _id: "2",
    me: {
      avatar: require("./assets/images/avatar.jpg"),
      fullname: "Adeeyo Joseph Adebiyi"
    },
    secondPerson: {
      avatar: { uri: "https://randomuser.me/portraits/thumb/women/69.jpg" },
      fullname: "Jesse Doyle"
    },
    lastMessage: "I used to think I was indecisive. But now I’m not so sure.",
    lastMessageDateTime: 1673688875553,
    unReadMessagesCount: 1
  },
  {
    _id: "3",
    me: {
      avatar: require("./assets/images/avatar.jpg"),
      fullname: "Adeeyo Joseph Adebiyi"
    },
    secondPerson: {
      avatar: { uri: "https://randomuser.me/portraits/thumb/men/68.jpg" },
      fullname: "Peter Robles"
    },
    lastMessage: "Hey, what is up?",
    lastMessageDateTime: 1673678875553,
    unReadMessagesCount: 4
  },
  {
    _id: "4",
    me: {
      avatar: require("./assets/images/avatar.jpg"),
      fullname: "Adeeyo Joseph Adebiyi"
    },
    secondPerson: {
      avatar: { uri: "https://randomuser.me/portraits/thumb/women/67.jpg" },
      fullname: "Emiliano Burnett"
    },
    lastMessage: "6:30 is the best time on a clock, hands down.",
    lastMessageDateTime: 1673668875553,
    unReadMessagesCount: 1
  },
  {
    _id: "5",
    me: {
      avatar: require("./assets/images/avatar.jpg"),
      fullname: "Adeeyo Joseph Adebiyi"
    },
    secondPerson: {
      avatar: { uri: "https://randomuser.me/portraits/thumb/men/66.jpg" },
      fullname: "Dereon Rangel"
    },
    lastMessage:
      "Every woman should marry an archeologist, because the older she gets, the more he'll love her.",
    lastMessageDateTime: 1673668875553,
    unReadMessagesCount: 0
  },
  {
    _id: "6",
    me: {
      avatar: require("./assets/images/avatar.jpg"),
      fullname: "Adeeyo Joseph Adebiyi"
    },
    secondPerson: {
      avatar: { uri: "https://randomuser.me/portraits/thumb/women/65.jpg" },
      fullname: "Elisha Mathis"
    },
    lastMessage: "My tallest finger loves giving people standing ovations.",
    lastMessageDateTime: 1673658875553,
    unReadMessagesCount: 0
  },
  {
    _id: "7",
    me: {
      avatar: require("./assets/images/avatar.jpg"),
      fullname: "Adeeyo Joseph Adebiyi"
    },
    secondPerson: {
      avatar: { uri: "https://randomuser.me/portraits/thumb/men/64.jpg" },
      fullname: "Ellis Michael"
    },
    lastMessage:
      "Don’t you hate it when someone answers their own questions? I do.",
    lastMessageDateTime: 1673648875553,
    unReadMessagesCount: 0
  },
  {
    _id: "8",
    me: {
      avatar: require("./assets/images/avatar.jpg"),
      fullname: "Adeeyo Joseph Adebiyi"
    },
    secondPerson: {
      avatar: { uri: "https://randomuser.me/portraits/thumb/women/63.jpg" },
      fullname: "Darryl Riddle"
    },
    lastMessage:
      "A pessimist is someone who has spent too much time listening to optimists.",
    lastMessageDateTime: 1673638875553,
    unReadMessagesCount: 0
  },
  {
    _id: "9",
    me: {
      avatar: require("./assets/images/avatar.jpg"),
      fullname: "Adeeyo Joseph Adebiyi"
    },
    secondPerson: {
      avatar: { uri: "https://randomuser.me/portraits/thumb/men/62.jpg" },
      fullname: "Beau Cantrell"
    },
    lastMessage:
      "A successful man is one who earns more than his wife can spend. A successful woman is one who knows where to look for such a man.",
    lastMessageDateTime: 1673628875553,
    unReadMessagesCount: 0
  },
  {
    _id: "10",
    me: {
      avatar: require("./assets/images/avatar.jpg"),
      fullname: "Adeeyo Joseph Adebiyi"
    },
    secondPerson: {
      avatar: { uri: "https://randomuser.me/portraits/thumb/men/61.jpg" },
      fullname: "Zaid Cervantes"
    },
    lastMessage:
      "You should always knock before opening a fridge, just in case there's a salad dressing inside.",
    lastMessageDateTime: 1673618875553,
    unReadMessagesCount: 0
  },
  {
    _id: "11",
    me: {
      avatar: require("./assets/images/avatar.jpg"),
      fullname: "Adeeyo Joseph Adebiyi"
    },
    secondPerson: {
      avatar: { uri: "https://randomuser.me/portraits/thumb/women/60.jpg" },
      fullname: "Eve Leon"
    },
    lastMessage: "After Tuesday, even the calendar says WTF.",
    lastMessageDateTime: 1673628875553,
    unReadMessagesCount: 0
  },
  {
    _id: "12",
    me: {
      avatar: require("./assets/images/avatar.jpg"),
      fullname: "Adeeyo Joseph Adebiyi"
    },
    secondPerson: {
      avatar: { uri: "https://randomuser.me/portraits/thumb/men/59.jpg" },
      fullname: "Kaden Hood"
    },
    lastMessage:
      "9 out of 10 voices in my head tell me I’m crazy. The tenth is just humming.",
    lastMessageDateTime: 1673618875553,
    unReadMessagesCount: 0
  },
  {
    _id: "13",
    me: {
      avatar: require("./assets/images/avatar.jpg"),
      fullname: "Adeeyo Joseph Adebiyi"
    },
    secondPerson: {
      avatar: { uri: "https://randomuser.me/portraits/thumb/women/58.jpg" },
      fullname: "Azul Hodges"
    },
    lastMessage: "I used to have a horrible signature.",
    lastMessageDateTime: 1673598875553,
    unReadMessagesCount: 0
  }
];
