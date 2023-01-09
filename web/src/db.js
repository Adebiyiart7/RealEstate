export const featured = [
  {
    _id: "2",
    image: require("./assets/images/building2.jpg"),
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
    image: require("./assets/images/building1.jpg"),
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
    image: require("./assets/images/building3.jpg"),
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
    image: require("./assets/images/building4.jpg"),
    name: "Adewale Hotels",
    state: "Akure",
    location: "No 6 St. Michael street, Akure, Nigeria.",
    map: "",
    cost: 35000,
    duration: "night",
    rating: 4.7
  },
  {
    _id: "5",
    image: require("./assets/images/building2.jpg"),
    name: "Zenith Apartments",
    state: "Lagos",
    location: "No 6 St. Michael street, Lagos, Nigeria.",
    map: "",
    cost: 64000,
    duration: "night",
    rating: 4.9
  },
  {
    _id: "6",
    image: require("./assets/images/building1.jpg"),
    name: "Kings and Queens Apartments",
    state: "Abuja",
    location: "No 6 St. Michael street, Abuja, Nigeria.",
    map: "",
    cost: 480000,
    duration: "night",
    rating: 4.7
  },
  {
    _id: "7",
    image: require("./assets/images/building3.jpg"),
    name: "Gwarimpa Estate",
    state: "Abuja",
    location: "No 6 St. Michael street, Abuja, Nigeria.",
    map: "",
    cost: 11000000,
    duration: "year",
    rating: 5.0
  },
  {
    _id: "8",
    image: require("./assets/images/building4.jpg"),
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
    image: require("./assets/images/interior1.jpg"),
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
      require("./assets/images/interior6.jpg"),
      require("./assets/images/interior3.jpg"),
      require("./assets/images/interior4.jpg"),
      require("./assets/images/interior5.jpg"),
      require("./assets/images/interior1.jpg"),
      require("./assets/images/interior2.jpg"),
      require("./assets/images/interior8.jpg"),
      require("./assets/images/interior9.jpg"),
      require("./assets/images/interior10.jpg"),
      require("./assets/images/interior11.jpg"),
      require("./assets/images/interior12.jpg")
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
    image: require("./assets/images/interior2.jpg"),
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
      require("./assets/images/interior6.jpg"),
      require("./assets/images/interior3.jpg"),
      require("./assets/images/interior4.jpg"),
      require("./assets/images/interior5.jpg"),
      require("./assets/images/interior1.jpg"),
      require("./assets/images/interior2.jpg"),
      require("./assets/images/interior8.jpg"),
      require("./assets/images/interior9.jpg"),
      require("./assets/images/interior10.jpg"),
      require("./assets/images/interior11.jpg"),
      require("./assets/images/interior12.jpg")
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
    image: require("./assets/images/interior3.jpg"),
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
      require("./assets/images/interior6.jpg"),
      require("./assets/images/interior3.jpg"),
      require("./assets/images/interior4.jpg"),
      require("./assets/images/interior5.jpg"),
      require("./assets/images/interior1.jpg"),
      require("./assets/images/interior2.jpg"),
      require("./assets/images/interior8.jpg"),
      require("./assets/images/interior9.jpg"),
      require("./assets/images/interior10.jpg"),
      require("./assets/images/interior11.jpg"),
      require("./assets/images/interior12.jpg")
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
    image: require("./assets/images/interior4.jpg"),
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
      require("./assets/images/interior6.jpg"),
      require("./assets/images/interior3.jpg"),
      require("./assets/images/interior4.jpg"),
      require("./assets/images/interior5.jpg"),
      require("./assets/images/interior1.jpg"),
      require("./assets/images/interior2.jpg"),
      require("./assets/images/interior8.jpg"),
      require("./assets/images/interior9.jpg"),
      require("./assets/images/interior10.jpg"),
      require("./assets/images/interior11.jpg"),
      require("./assets/images/interior12.jpg")
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
    image: require("./assets/images/interior5.jpg"),
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
      require("./assets/images/interior6.jpg"),
      require("./assets/images/interior3.jpg"),
      require("./assets/images/interior4.jpg"),
      require("./assets/images/interior5.jpg"),
      require("./assets/images/interior1.jpg"),
      require("./assets/images/interior2.jpg"),
      require("./assets/images/interior8.jpg"),
      require("./assets/images/interior9.jpg"),
      require("./assets/images/interior10.jpg"),
      require("./assets/images/interior11.jpg"),
      require("./assets/images/interior12.jpg")
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
    image: require("./assets/images/interior6.jpg"),
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
      require("./assets/images/interior6.jpg"),
      require("./assets/images/interior3.jpg"),
      require("./assets/images/interior4.jpg"),
      require("./assets/images/interior5.jpg"),
      require("./assets/images/interior1.jpg"),
      require("./assets/images/interior2.jpg"),
      require("./assets/images/interior8.jpg"),
      require("./assets/images/interior9.jpg"),
      require("./assets/images/interior10.jpg"),
      require("./assets/images/interior11.jpg"),
      require("./assets/images/interior12.jpg")
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
    image: require("./assets/images/interior12.jpg"),
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
      require("./assets/images/interior6.jpg"),
      require("./assets/images/interior3.jpg"),
      require("./assets/images/interior4.jpg"),
      require("./assets/images/interior5.jpg"),
      require("./assets/images/interior1.jpg"),
      require("./assets/images/interior2.jpg"),
      require("./assets/images/interior8.jpg"),
      require("./assets/images/interior9.jpg"),
      require("./assets/images/interior10.jpg"),
      require("./assets/images/interior11.jpg"),
      require("./assets/images/interior12.jpg")
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
    image: require("./assets/images/interior8.jpg"),
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
      require("./assets/images/interior6.jpg"),
      require("./assets/images/interior3.jpg"),
      require("./assets/images/interior4.jpg"),
      require("./assets/images/interior5.jpg"),
      require("./assets/images/interior1.jpg"),
      require("./assets/images/interior2.jpg"),
      require("./assets/images/interior8.jpg"),
      require("./assets/images/interior9.jpg"),
      require("./assets/images/interior10.jpg"),
      require("./assets/images/interior11.jpg"),
      require("./assets/images/interior12.jpg")
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
    image: require("./assets/images/interior9.jpg"),
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
      require("./assets/images/interior6.jpg"),
      require("./assets/images/interior3.jpg"),
      require("./assets/images/interior4.jpg"),
      require("./assets/images/interior5.jpg"),
      require("./assets/images/interior1.jpg"),
      require("./assets/images/interior2.jpg"),
      require("./assets/images/interior8.jpg"),
      require("./assets/images/interior9.jpg"),
      require("./assets/images/interior10.jpg"),
      require("./assets/images/interior11.jpg"),
      require("./assets/images/interior12.jpg")
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
    image: require("./assets/images/interior10.jpg"),
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
      require("./assets/images/interior6.jpg"),
      require("./assets/images/interior3.jpg"),
      require("./assets/images/interior4.jpg"),
      require("./assets/images/interior5.jpg"),
      require("./assets/images/interior1.jpg"),
      require("./assets/images/interior2.jpg"),
      require("./assets/images/interior8.jpg"),
      require("./assets/images/interior9.jpg"),
      require("./assets/images/interior10.jpg"),
      require("./assets/images/interior11.jpg"),
      require("./assets/images/interior12.jpg")
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
    image: require("./assets/images/interior11.jpg"),
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
      require("./assets/images/interior6.jpg"),
      require("./assets/images/interior3.jpg"),
      require("./assets/images/interior4.jpg"),
      require("./assets/images/interior5.jpg"),
      require("./assets/images/interior1.jpg"),
      require("./assets/images/interior2.jpg"),
      require("./assets/images/interior8.jpg"),
      require("./assets/images/interior9.jpg"),
      require("./assets/images/interior10.jpg"),
      require("./assets/images/interior11.jpg"),
      require("./assets/images/interior12.jpg")
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
    image: require("./assets/images/interior12.jpg"),
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
      require("./assets/images/interior6.jpg"),
      require("./assets/images/interior3.jpg"),
      require("./assets/images/interior4.jpg"),
      require("./assets/images/interior5.jpg"),
      require("./assets/images/interior1.jpg"),
      require("./assets/images/interior2.jpg"),
      require("./assets/images/interior8.jpg"),
      require("./assets/images/interior9.jpg"),
      require("./assets/images/interior10.jpg"),
      require("./assets/images/interior11.jpg"),
      require("./assets/images/interior12.jpg")
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
  }
];

export const estateCategory = [
  { name: "All", icon: "check-decagram" },
  { name: "House" },
  { name: "Villa" },
  { name: "Estate" },
  { name: "Apartment" }
];

export const estateLocations = [
  { name: "All" },
  { name: "Gwarinpa Estate, Abuja" },
  { name: "Iyanapaja Estate, Lagos" },
  { name: "Ultra Estate, Kaaduna" },
  { name: "Bayero Estate, Kano" },
  { name: "Gwarinpa Estate, Ibadan" },
  { name: "International Estate, Osun" },
  { name: "Yamaha Estate, Akure" },
  { name: "Twins Estate, Abia" },
  { name: "Banana Estate, Ogun" },
  { name: "Kings and Queens Estate, Owerri" }
];
