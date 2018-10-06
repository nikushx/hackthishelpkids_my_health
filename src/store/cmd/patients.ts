const patientData = {
  patients: [
    {
      image: '/Patients/sean.jpg',
      id: '1',
      relation: 'Self',
      name: 'Sean Freeman',
      family_history: [
        {
          relation: 'Mother',
          condition: 'Diabetes'
        },
        {
          relation: 'Father',
          condition: 'Alcoholism'
        }
      ],
      medical_history: [
        {
          date: '1/23/2010',
          description: 'Sprained Ankle',
          cause: 'Athletics'
        },
        {
          date: '4/19/2012',
          description: 'Influenza',
          cause: 'Seasonal'
        },
        {
          date: '9/20/2014',
          description: 'Athlete\'s Foot',
          cause: 'Unknown'
        },
        {
          date: '9/20/2016',
          description: 'Back Pain',
          cause: 'Unknown'
        }
      ],
      medications: [
        {
          medicine: 'Prozac',
          prescribed_date: '2/1/2010',
          frequency: 'Daily'
        },
        {
          medicine: 'Vitamin E Supplements',
          prescribed_date: '3/24/2010',
          frequency: 'Daily'
        },
        {
          medicine: 'Xanax',
          prescribed_date: '6/2/2014',
          frequency: 'as needed'
        }
      ],
      allergies: [
        {
          allergy: 'Bees',
          severity: 'High'
        },
        {
          allergy: 'Citrus',
          severity: 'Low'
        }
      ]
    },
    {
      image: '/Patients/dan.jpg',
      id: '2',
      relation: 'Brother',
      name: 'Dan Mayhak',
      family_history: [
        {
          relation: 'Uncle',
          condition: 'Crohn\'s Disease'
        },
        {
          relation: 'Father',
          condition: 'Pancreatic Cancer'
        },
        {
          relation: 'Sister',
          condition: 'Glaucoma'
        }
      ],
      medical_history: [
        {
          date: '11/1/2011',
          description: 'Knee Replacement',
          cause: 'Car Accident'
        },
        {
          date: '3/24/2013',
          description: 'Whooping Cough',
          cause: 'Seasonal'
        },
        {
          date: '4/28/2014',
          description: 'Ear Infection',
          cause: 'Unknown'
        },
        {
          date: '10/29/2015',
          description: 'Gastric Bypass',
          cause: 'Obesity'
        }
      ],
      medications: [
        {
          medicine: 'Adderall',
          prescribed_date: '1/19/2000',
          frequency: 'Daily'
        },
        {
          medicine: 'Vitamin C Supplements',
          prescribed_date: '7/4/2004',
          frequency: 'Daily'
        },
        {
          medicine: 'Ativan',
          prescribed_date: '2/2/2017',
          frequency: 'Weekly'
        }
      ],
      allergies: [
        {
          allergy: 'Latex',
          severity: 'High'
        },
        {
          allergy: 'Apples',
          severity: 'Low'
        },
        {
          allergy: 'Chocolate',
          severity: 'Medium'
        }
      ]
    },
    {
      image: '/Patients/emily.jpg',
      id: '3',
      relation: 'Wife',
      name: 'Emily Sutter',
      family_history: [
        {
          relation: 'Mother',
          condition: 'Ovarian Cancer'
        },
        {
          relation: 'Brother',
          condition: 'Ringworm'
        },
        {
          relation: 'Grandmother',
          condition: 'Bipolar Disorder'
        },
        {
          relation: 'Grandfather',
          condition: 'Heart Disease'
        }
      ],
      medical_history: [
        {
          date: '08/12/2000',
          description: 'Nightsweats',
          cause: 'Unknown'
        },
        {
          date: '6/1/2007',
          description: 'Nose Bleeds',
          cause: 'Dry Nasal Passages'
        },
        {
          date: '9/20/2014',
          description: 'Lyme Disease',
          cause: 'Deer Tick'
        }
      ],
      medications: [
        {
          medicine: 'Abilify',
          prescribed_date: '4/30/2008',
          frequency: 'Daily'
        },
        {
          medicine: 'Lyrica',
          prescribed_date: '9/12/2009',
          frequency: 'Daily'
        },
        {
          medicine: 'Concerta',
          prescribed_date: '5/2/2013',
          frequency: 'Daily'
        }
      ],
      allergies: [
        {
          allergy: 'Peanuts',
          severity: 'Medium'
        },
        {
          allergy: 'Cats',
          severity: 'High'
        }
      ]
    },
    {
      image: '/Patients/stew.jpg',
      id: '4',
      relation: 'Son',
      name: 'Stew Edwards',
      family_history: [
        {
          relation: 'Aunt',
          condition: 'Depression'
        },
        {
          relation: 'Sister',
          condition: 'Insomnia'
        },
        {
          relation: 'Brother',
          condition: 'Melanoma'
        },
        {
          relation: 'Father',
          condition: 'Measles'
        },
        {
          relation: 'Mother',
          condition: 'Dementia'
        }
      ],
      medical_history: [
        {
          date: '6/12/2000',
          description: 'Tendinitis',
          cause: 'Unknown'
        },
        {
          date: '6/1/2007',
          description: 'Arthritis',
          cause: 'Age'
        },
        {
          date: '11/3/2018',
          description: 'Appendicitis',
          cause: 'Unknown'
        },
        {
          date: '12/3/2018',
          description: 'Sprained Ankle',
          cause: 'Athletics'
        }
      ],
      medications: [
        {
          medicine: 'Humira',
          prescribed_date: '5/10/2002',
          frequency: 'Daily'
        },
        {
          medicine: 'Kaletra',
          prescribed_date: '7/12/2003',
          frequency: 'Weekly'
        },
        {
          medicine: 'Niacin',
          prescribed_date: '5/9/2006',
          frequency: 'Daily'
        }
      ],
      allergies: [
        {
          allergy: 'Dairy',
          severity: 'High'
        }
      ]
    },
    {
      image: '/Patients/jane.jpg',
      id: '5',
      relation: 'Daughter',
      name: 'Jane Ericson',
      family_history: [
        {
          relation: 'Aunt',
          condition: 'Depression'
        },
        {
          relation: 'Sister',
          condition: 'Insomnia'
        },
        {
          relation: 'Brother',
          condition: 'Melanoma'
        },
        {
          relation: 'Father',
          condition: 'Measles'
        },
        {
          relation: 'Mother',
          condition: 'Dementia'
        },
        {
          relation: 'Sister',
          condition: 'Leukemia'
        }
      ],
      medical_history: [
        {
          date: '6/12/2009',
          description: 'Broken Finger',
          cause: 'Athletics'
        },
        {
          date: '10/14/2010',
          description: 'Scoliosis',
          cause: 'Unknown'
        },
        {
          date: '8/16/2015',
          description: 'Seizure',
          cause: 'Flashing Lights'
        }
      ],
      medications: [
        {
          medicine: 'Aspirin',
          prescribed_date: '5/19/2000',
          frequency: 'Daily'
        },
        {
          medicine: 'Nexium',
          prescribed_date: '7/12/2002',
          frequency: 'Weekly'
        },
        {
          medicine: 'Lexapro',
          prescribed_date: '5/23/2008',
          frequency: 'Weekly'
        }
      ],
      allergies: [
        {
          allergy: 'Nuts',
          severity: 'High'
        },
        {
          allergy: 'Dogs',
          severity: 'Low'
        }
      ]
    },
    // {
    //   image: '',
    //   id: '6',
    //   relation: 'nephew',
    //   name: 'Jack BigeLow',
    //   family_history: [
    //     {
    //       relation: 'Brother',
    //       condition: 'Sleep Apnea'
    //     },
    //     {
    //       relation: 'Sister',
    //       condition: 'Sleep Walking'
    //     }
    //   ],
    //   medical_history: [
    //     {
    //       date: '10/20/2004',
    //       description: 'Sleep Paralysis',
    //       cause: 'Unknown'
    //     },
    //     {
    //       date: '5/1/2017',
    //       description: 'Influenza',
    //       cause: 'Seasonal'
    //     },
    //     {
    //       date: '12/05/2018',
    //       description: 'Staph Infection',
    //       cause: 'Unknown'
    //     }
    //   ],
    //   medications: [
    //     {
    //       medicine: 'Latuda',
    //       prescribed_date: '12/9/2008',
    //       frequency: 'as needed'
    //     },
    //     {
    //       medicine: 'Gemzar',
    //       prescribed_date: '1/18/2010',
    //       frequency: 'Daily'
    //     }
    //   ],
    //   allergies: [
    //     {
    //       allergy: 'Soy',
    //       severity: 'Low'
    //     },
    //     {
    //       allergy: 'Gluten',
    //       severity: 'High'
    //     }
    //   ]
    // },
    {
      image: '/Patients/eric.jpg',
      id: '7',
      relation: 'Brother',
      name: 'Eric Acosta',
      family_history: [
        {
          relation: 'Father',
          condition: 'Schizophrenia'
        }
      ],
      medical_history: [
        {
          date: '7/3/2006',
          description: 'Stitches',
          cause: 'Athletics'
        },
        {
          date: '4/1/2009',
          description: 'Snake bite',
          cause: 'Recreation'
        },
        {
          date: '9/20/2010',
          description: 'Enlarged Spleen',
          cause: 'Unknown'
        },
        {
          date: '11/11/2011',
          description: 'Back Pain',
          cause: 'Unknown'
        }
      ],
      medications: [
        {
          medicine: 'Prozac',
          prescribed_date: '2/1/2010',
          frequency: 'Daily'
        },
        {
          medicine: 'Vitamin Supplements',
          prescribed_date: '3/24/2010',
          frequency: 'Daily'
        },
        {
          medicine: 'Xanax',
          prescribed_date: '6/2/2014',
          frequency: 'as needed'
        }
      ],
      allergies: [
        {
          allergy: 'Bees',
          severity: 'High'
        },
        {
          allergy: 'Citrus',
          severity: 'Low'
        }
      ]
    },
    {
      image: '/Patients/madeline.jpg',
      id: '8',
      relation: 'Daughter',
      name: 'Madeline Rogers',
      family_history: [
        {
          relation: 'Mother',
          condition: 'Stroke'
        },
        {
          relation: 'Father',
          condition: 'Cardiac Arrest'
        },
        {
          relation: 'Sister',
          condition: 'Heart Disease'
        }
      ],
      medical_history: [
        {
          date: '1/30/2010',
          description: 'Pink Eye',
          cause: 'Unknown'
        },
        {
          date: '5/10/2013',
          description: 'Migraines',
          cause: 'Unknown'
        }
      ],
      medications: [
        {
          medicine: 'Klonopin',
          prescribed_date: '3/3/2003',
          frequency: 'Daily'
        },
        {
          medicine: 'Vitamin D Supplements',
          prescribed_date: '4/1/2005',
          frequency: 'Weekly'
        },
        {
          medicine: 'Clobex',
          prescribed_date: '6/7/2007',
          frequency: 'as needed'
        }
      ],
      allergies: [
        {
          allergy: 'Shellfish',
          severity: 'Low'
        },
        {
          allergy: 'Wheat',
          severity: 'Low'
        },
        {
          allergy: 'Strawberries',
          severity: 'High'
        }
      ]
    }
  ]
}

export default patientData;