export const GENDER_OPTIONS = [
    { title: 'Female', value: 'female' },
    { title: 'Male', value: 'male' },
  ];
  
  const countrynames = [
    'America',
    'Africa',
    'Australia',
    'China',
    'India',
    'Malaysia',
    'pakistan',
    'Qatar',
    'Russia',
  ];
  
  export const COUNTRY_OPTIONS = countrynames.map((country) => ({
    title: country,
    value: country,
  }));
  
  const statenames = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Bihar',
    'Gujarat',
    'Haryana',
    'Maharashtra',
    'Madhya Pradesh',
    'Orissa',
    'Punjab',
    'Telangana',
  ];
  
  export const STATE_OPTIONS = statenames.map((state) => ({
    title: state,
    value: state,
  }));
  
  const citynames = [
    'Mumbai',
    'Jaipur',
    'Chennai',
    'Bangalore',
    'Hyderabad',
    'Delhi',
    'Lucknow',
    'varanasi',
    'Ooty',
    'Vijayawada',
  ];
  
  export const CITIES_OPTIONS = citynames.map((city) => ({
    title: city,
    value: city,
  }));
  
  export const HOBBIES = [
    { title: `Cricket`, value: `Cricket` },
    { title: `Reading`, value: `Reading` },
    { title: `Browsing`, value: `Browsing` },
    { title: `Painting`, value: `Painting` },
  ];
  