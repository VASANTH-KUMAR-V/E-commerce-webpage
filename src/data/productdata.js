import HairOil from '../components/assets/img/Hair-oil.jpg';
import BodyLotion from '../components/assets/img/body-lotion.jpg';
import FootSoak from '../components/assets/img/Foot-soak.jpg';
import BathPowder from '../components/assets/img/Bath-powder.jpg';
import BodyButter from '../components/assets/img/Body-butter.jpg';
import LipButter from '../components/assets/img/lip-butter.jpg';
import FaceCream from '../components/assets/img/Face-cream.jpg';
import FootButter from '../components/assets/img/Foot-cream.jpg';
import Kajal from '../components/assets/img/Kajal.jpg';
import LipBalm from '../components/assets/img/lip-balm.jpg';


export const products = {
    1: {
      image: HairOil,
      title: 'Herbal Hair Oil',
      category: 'Hair Care',
      price: '260.00 ',
      priceSize : '(230 ml)',
      rating: 4,
      description1: '<strong>Ingredients</strong> : Coconut Oil, Vettiver, Marudhani leaf, Amla, Neem Leaves, Fenugreek, Hibiscus, bhringraj, Aloevera, Almond, Piper nigrum, Edible Camphor.',
      description2: '<strong>Benefits</strong> : Hair oil made with 100% fresh herbs. It controls dandruff and hair fall. Nourishes the scalp. Prevents pre-mature greying of hair. Adds smooth and shine to hair.',
      longDescription: '<strong>Directions</strong> : Apply the oil on the scalp and massage gently, leave if for 2 hours/overnight and then wash your hair with hair wash powder or shampoo. For best result Use it at least thrice a week on regular basis. This oil can also be used as regular hair oil.',
      details: [
        { title: 'Weight', value: '1 kg' },
        { title: 'Country of Origin', value: 'Agro Farm' },
        { title: 'Quality', value: 'Organic' },
        { title: 'Check', value: 'Healthy' },
        { title: 'Min Weight', value: '250 Kg' }
      ],
      reviews: [
        {
          avatar: 'avatar.jpg',
          date: 'April 12, 2024',
          name: 'Jason Smith',
          rating: 4,
          comment: 'Great product!'
        },
        {
          avatar: 'avatar.jpg',
          date: 'April 12, 2024',
          name: 'Sam Peters',
          rating: 5,
          comment: 'Absolutely love it!'
        }
      ],
      categories: [
        { name: 'All Products', count: 9 },
        { name: 'Creams', count: 4 },
        { name: 'Others', count: 5 },

      ]
    },
    2: {
      image: BodyLotion,
      title: 'Body Lotion',
      category: 'Body Care',
      price: '325.00 ',
      priceSize : ' (100 ml)',
      rating: 4,
      description1: '<strong>Ingredients</strong> : Shea butter, Almond oil, Jojoba Oil, Rose Hydrosol, Veg Glycerine, Emulsifying Wax, Cetyl Alcohol, Essential Oil, Fragrance & Preservative.',
      description2: ' <strong>Benefits</strong> : Hydrates skin. For best results use regularly For all skin types',
      longDescription: 'A premium body lotion enriched with natural ingredients to keep your skin hydrated and supple. Perfect for daily application and suitable for all skin types.',
      details: [
        { title: 'Weight', value: '250 ml' },
        { title: 'Country of Origin', value: 'USA' },
        { title: 'Quality', value: 'Premium' },
        { title: 'Check', value: 'Dermatologically Tested' },
        { title: 'Packaging', value: 'Plastic Bottle' }
      ],
      reviews: [
        {
          avatar: 'avatar.jpg',
          date: 'April 15, 2024',
          name: 'Alex Johnson',
          rating: 4,
          comment: 'Good lotion, absorbs quickly.'
        },
        {
          avatar: 'avatar.jpg',
          date: 'April 16, 2024',
          name: 'Emily Davis',
          rating: 5,
          comment: 'Amazing product for dry skin!'
        }
      ],
      categories: [
        { name: 'All Products', count: 9 },
        { name: 'Creams', count: 4 },
        { name: 'Others', count: 5 },

      ]
    },
    3: {
      image: FootSoak,
      title: 'Foot Soak',
      category: 'Skin Care',
      price: '150.00',
      priceSize : ' (150 g)',
      rating: 4,
      description1: '<strong>Ingredients</strong> : Epsom Salt, Baking Soda, Himalayan Pink salt, Lavender E.O .',
      description2: '<strong>Benefits</strong> : Soothes and relaxes the muscles. Cleans feet. Prevents bacterial growth. Reduces pain and swelling of foot.',
      longDescription: '<strong>Directions</strong> : Add a spoon full of the salt in tub filled with warm water. stir well and soak your feet for 20 minutes, then wash it off and pat dry.',
      details: [
        { title: 'Weight', value: '500 g' },
        { title: 'Country of Origin', value: 'France' },
        { title: 'Quality', value: 'Luxury' },
        { title: 'Check', value: 'Tested for Safety' },
        { title: 'Packaging', value: 'Bag' }
      ],
      reviews: [
        {
          avatar: 'avatar.jpg',
          date: 'April 20, 2024',
          name: 'Michael Lee',
          rating: 4,
          comment: 'Very relaxing, but a bit pricey.'
        },
        {
          avatar: 'avatar.jpg',
          date: 'April 21, 2024',
          name: 'Sophie Turner',
          rating: 5,
          comment: 'My feet feel great after use!'
        }
      ],
      categories: [
        { name: 'All Products', count: 9 },
        { name: 'Creams', count: 4 },
        { name: 'Others', count: 5 },

      ]
    },
    4: {
      image: BathPowder,
      title: 'Herbal Bath Powder',
      category: 'Skin Care',
      price: '300.00',
      priceSize : ' (200 g)',
      rating: 5,
      description1: '<strong>Ingredients</strong> : Rose Petals, Vettiver, Marikolundhu, Koraikilangu, Vasambu, Karboga Arisi, Avarampoo, Poolan Kilangu, Green Gram,  Hibiscus, Magilam Poo.',
      description2: '<strong>Benefits</strong> : Made with all herbal ingredients. Makes your skin feel petal soft and keeps you fresh all the day.',
      longDescription: '<strong>Directions</strong> : To use take the required amount of herbal bath powder in a bowl, add water and make a paste. Gently massage all over the body and bath. Can be used daily by both men and women.',
      details: [
        { title: 'Weight', value: '300 g' },
        { title: 'Country of Origin', value: 'Japan' },
        { title: 'Quality', value: 'Premium' },
        { title: 'Check', value: 'Hypoallergenic' },
        { title: 'Packaging', value: 'Box' }
      ],
      reviews: [
        {
          avatar: 'avatar.jpg',
          date: 'April 25, 2024',
          name: 'Laura Wilson',
          rating: 5,
          comment: 'Makes my bath feel like a luxury experience!'
        },
        {
          avatar: 'avatar.jpg',
          date: 'April 26, 2024',
          name: 'James Brown',
          rating: 5,
          comment: 'Great product for relaxing after a long day.'
        }
      ],
      categories: [
        { name: 'All Products', count: 9 },
        { name: 'Creams', count: 4 },
        { name: 'Others', count: 5 },

      ]
    },
    5: {
      image: BodyButter,
      title: 'Body Butter Cream',
      category: 'Skin Care',
      price: '350.00',
      priceSize : ' (100 g)',
      rating: 5,
      description1: '<strong>Ingredients </strong>: Almond oil, Shea butter, Veg Glycerine, E Wax, Cetyl Alcohol Aqua, Iscaguard peg, Lavender E.O',
      description2: '<strong>Benefits </strong>: Blend of shea butter and almond oil deeply moisturizes the skin. For best results use regularly. For dry skin',
      longDescription: 'Our Body Butter Cream is formulated to provide deep hydration and nourishment to your skin. Its rich, creamy texture melts into the skin, leaving it soft and smooth.',
      details: [
        { title: 'Weight', value: '200 ml' },
        { title: 'Country of Origin', value: 'Italy' },
        { title: 'Quality', value: 'Organic' },
        { title: 'Check', value: 'Dermatologically Tested' },
        { title: 'Packaging', value: 'Jar' }
      ],
      reviews: [
        {
          avatar: 'avatar.jpg',
          date: 'April 30, 2024',
          name: 'Olivia Taylor',
          rating: 5,
          comment: 'Best body butter I’ve ever used!'
        },
        {
          avatar: 'avatar.jpg',
          date: 'May 1, 2024',
          name: 'Daniel Martinez',
          rating: 4,
          comment: 'Very moisturizing, but a bit greasy.'
        }
      ],
      categories: [
        { name: 'All Products', count: 9 },
        { name: 'Creams', count: 4 },
        { name: 'Others', count: 5 },

      ]
    },
    6: {
      image: LipButter,
      title: 'Lip Butter Cream',
      category: 'Skin Care',
      price: '110.00',
      rating: 4,
      description1: '<strong>Ingredients </strong>:Beeswax,Shea butter,Virgin coconut oil,olive oil and Almond oil.',
      description2: '<strong>Benefits </strong>: Provides intense moisturisation to lips. For dry and extreme dry and chapped lips ',
      longDescription: '<strong>Directions </strong>: Apply with your finger tips for smooth and moisitured lips. Use it regularly and as often as desired.',
      details: [
        { title: 'Weight', value: '15 g' },
        { title: 'Country of Origin', value: 'Germany' },
        { title: 'Quality', value: 'Natural' },
        { title: 'Check', value: 'Non-Toxic' },
        { title: 'Packaging', value: 'Tin' }
      ],
      reviews: [
        {
          avatar: 'avatar.jpg',
          date: 'May 5, 2024',
          name: 'Ava Roberts',
          rating: 4,
          comment: 'Great for keeping lips hydrated.'
        },
        {
          avatar: 'avatar.jpg',
          date: 'May 6, 2024',
          name: 'Ethan Lewis',
          rating: 5,
          comment: 'Love the texture and scent!'
        }
      ],
      categories: [
        { name: 'All Products', count: 9 },
        { name: 'Creams', count: 4 },
        { name: 'Others', count: 5 },

      ]
    },
    7: {
      image: FaceCream,
      title: 'Face Cream',
      category: 'Face Care',
      price: '325.00',
      priceSize : ' (50 g)',
      rating: 5,
      description1: '<strong>Ingredients</strong>: Licorice Extract, Fresh Almond Milk, Rose Hydrosol, Sweet Almond Oil, Virgin Coconut Oil, Emulsifying Wax, Cetyl Alcohol, Preservative And Fragrance.',
      description2: '<strong>Benefits</strong>: Nourishes skin, Reduces inflammation. Makes skin supple and glowing Regular use will reduce skin aging.',
      longDescription: '<strong>Directions</strong>: Wash your face and apply the cream on face and neck. Can be used anytime. Use Regularly for best results.',
      details: [
        { title: 'Weight', value: '50 ml' },
        { title: 'Country of Origin', value: 'UK' },
        { title: 'Quality', value: 'Luxury' },
        { title: 'Check', value: 'Clinically Tested' },
        { title: 'Packaging', value: 'Glass Jar' }
      ],
      reviews: [
        {
          avatar: 'avatar.jpg',
          date: 'May 10, 2024',
          name: 'Charlotte White',
          rating: 5,
          comment: 'Wonderful cream, very moisturizing.'
        },
        {
          avatar: 'avatar.jpg',
          date: 'May 11, 2024',
          name: 'Liam Clark',
          rating: 4,
          comment: 'Good texture and scent.'
        }
      ],
      categories: [
        { name: 'All Products', count: 9 },
        { name: 'Creams', count: 4 },
        { name: 'Others', count: 5 },

      ]
    },
    8: {
      image: FootButter,
      title: 'Foot butter cream',
      category: 'Skin Care',
      price: '200.00',
      priceSize : '(50 g)',
      rating: 4,
      description1: '<strong>Ingredients </strong>: Shea butter, Coconut Oil, Beeswax, Avocado Oil, Tea Tree E.Ο, Peppermint E.O, Eucalyptus Oil.',
      description2: '<strong>Benefits </strong>: Hydrates the skin, Remove roughness. Heals cracks. Can be used for all skin types.',
      longDescription: '<strong>Directions </strong>: Massage the cream gently onto your feet and soles till completely absorbed. Best used right before going to bed. Use Regularly for best results.',
      details: [
        { title: 'Weight', value: '100 ml' },
        { title: 'Country of Origin', value: 'Canada' },
        { title: 'Quality', value: 'Organic' },
        { title: 'Check', value: 'Hypoallergenic' },
        { title: 'Packaging', value: 'Tube' }
      ],
      reviews: [
        {
          avatar: 'avatar.jpg',
          date: 'May 15, 2024',
          name: 'Ella Harris',
          rating: 4,
          comment: 'Good for cracked heels.'
        },
        {
          avatar: 'avatar.jpg',
          date: 'May 16, 2024',
          name: 'Mason Young',
          rating: 5,
          comment: 'Heels feel much smoother!'
        }
      ],
      categories: [
        { name: 'All Products', count: 9 },
        { name: 'Creams', count: 4 },
        { name: 'Others', count: 5 },

      ]
    },
    9: {
      image: Kajal,
      title: 'Kajal',
      category: 'Eye Care',
      price: '200.00',
      rating: 4,
      description1: '<strong>Ingredients </strong>: Natural Khol taken From Ghee & Castor Oil, Almond, Castor Oil, Ghee, Beeswax, Shea Butter.',
      description2: '<strong>Benefits </strong>: Made from 100% natural ingredients. Smudge proof. Do not irritate eyes.',
      longDescription: 'Our Kajal is a classic eye product that defines and enhances your eyes with deep, long-lasting color. Perfect for everyday use or special occasions.',
      details: [
        { title: 'Weight', value: '2 g' },
        { title: 'Country of Origin', value: 'India' },
        { title: 'Quality', value: 'Natural' },
        { title: 'Check', value: 'Safe for Eyes' },
        { title: 'Packaging', value: 'Stick' }
      ],
      reviews: [
        {
          avatar: 'avatar.jpg',
          date: 'May 20, 2024',
          name: 'Mia King',
          rating: 4,
          comment: 'Good color payoff.'
        },
        {
          avatar: 'avatar.jpg',
          date: 'May 21, 2024',
          name: 'Oliver Scott',
          rating: 5,
          comment: 'Long-lasting and smudge-proof!'
        }
      ],
      categories: [
        { name: 'All Products', count: 9 },
        { name: 'Creams', count: 4 },
        { name: 'Others', count: 5 },

      ]
    },
    10: {
      image: LipBalm,
      title: 'Lip Balm',
      category: 'Skin Care',
      price: '99.00',
      priceSize : ' (5 g)',
      rating: 4,
      description1: '<strong>Flavours </strong>: Beetroot, Vanilla, Strawberry, Rose, Noral',
      description2: '<strong>Ingredients </strong>: Beeswax, Virgin Coconut oil, Avacado oil, Amond oil, Cocobutter, Shea butter, Vitamin E oil, Alkanet Root.',
      longDescription: '<strong>Directions </strong>: Apply with your finger tips for smooth and moisitured lips. Use it regularly and as often as desired.',
      details: [
        { title: 'Weight', value: '100 ml' },
        { title: 'Country of Origin', value: 'Canada' },
        { title: 'Quality', value: 'Organic' },
        { title: 'Check', value: 'Hypoallergenic' },
        { title: 'Packaging', value: 'Tube' }
      ],
      reviews: [
        {
          avatar: 'avatar.jpg',
          date: 'May 15, 2024',
          name: 'Ella Harris',
          rating: 4,
          comment: 'Good for cracked heels.'
        },
        {
          avatar: 'avatar.jpg',
          date: 'May 16, 2024',
          name: 'Mason Young',
          rating: 5,
          comment: 'Heels feel much smoother!'
        }
      ],
      categories: [
        { name: 'All Products', count: 9 },
        { name: 'Creams', count: 4 },
        { name: 'Others', count: 5 },

      ]
    },
    
  };
  
