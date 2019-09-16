exports.seed = function(knex) {
  return knex('courses').insert([
    { 
      name: 'Accounting & Finance', 
      teacher: 'Mr Andrew', 
      description: 'Nulla felis magna, mollis eget congue euismod, imperdiet sed nibh. Aliquam cursus eros sed justo.', 
      length: 22, 
      date: '01/01/2020', 
      course_code: 'asdfg_1234' 
    },
    { 
      name: 'Aeronautical & Manufacturing Engineering', 
      teacher: 'Mrs Emma', 
      description: 'In hac habitasse platea dictumst. Aenean condimentum dolor vitae tortor vestibulum, in placerat mi placerat.', 
      length: 28, 
      date: '01/01/2020', 
      course_code: 'asdfg_1235' 
    },
    { 
      name: 'Agriculture & Forestry', 
      teacher: 'Mrs Olivia', 
      description: 'Donec iaculis orci mauris, id condimentum turpis dapibus ut. Aliquam bibendum augue eu ligula ultrices.', 
      length: 22, 
      date: '01/01/2020', 
      course_code: 'asdfg_1236' 
    },
    { 
      name: 'American Studies', 
      teacher: 'Mr Ava', 
      description: 'Maecenas vel nibh vel sem luctus convallis. Suspendisse sit amet elit sed purus semper molestie.', 
      length: 24, 
      date: '01/01/2020', 
      course_code: 'asdfg_1237' 
    },
    { 
      name: 'Anatomy & Physiology', 
      teacher: 'Mr Isabella', 
      description: 'Etiam consectetur, justo in feugiat consectetur, metus mauris efficitur leo, vitae ultricies nisl nisl at.', 
      length: 12, 
      date: '01/01/2020', 
      course_code: 'asdfg_1238' 
    },
    { 
      name: 'Anthropology', 
      teacher: 'Mrs Sophia', 
      description: 'Sed metus ante, egestas vitae turpis sit amet, aliquet sagittis quam. Integer bibendum lorem eget.', 
      length: 28, 
      date: '01/01/2020', 
      course_code: 'asdfg_1239' 
    },
    { 
      name: 'Archaeology', 
      teacher: 'Mr Charlotte', 
      description: 'Vestibulum a eleifend tortor. Suspendisse ac sem odio. Pellentesque tellus tortor, euismod ac arcu et.', 
      length: 28, 
      date: '01/01/2020', 
      course_code: 'asdfg_1240' 
    },
    { 
      name: 'Architecture', 
      teacher: 'Mrs Mia', 
      description: 'Fusce justo orci, ullamcorper nec eleifend id, accumsan eget velit. Nulla vitae ante tortor. Maecenas.', 
      length: 22, 
      date: '01/01/2020', 
      course_code: 'asdfg_1241' 
    },
    { 
      name: 'Art & Design', 
      teacher: 'Mr Amelia', 
      description: 'Nulla felis magna, mollis eget congue euismod, imperdiet sed nibh. Aliquam cursus eros sed justo.', 
      length: 32, 
      date: '01/01/2020', 
      course_code: 'asdfg_1242' 
    },
    { 
      name: 'Aural & Oral Sciences', 
      teacher: 'Mr Harper', 
      description: 'Nulla felis magna, mollis eget congue euismod, imperdiet sed nibh. Aliquam cursus eros sed justo.', 
      length: 38, 
      date: '01/01/2020', 
      course_code: 'asdfg_1243' 
    },
    { 
      name: 'Biological Sciences', 
      teacher: 'Mr Evelyn', 
      description: 'Nulla felis magna, mollis eget congue euismod, imperdiet sed nibh. Aliquam cursus eros sed justo.', 
      length: 8, 
      date: '01/01/2020', 
      course_code: 'asdfg_1244' 
    },
    { 
      name: 'Building', 
      teacher: 'Mr Abigail', 
      description: 'Nulla felis magna, mollis eget congue euismod, imperdiet sed nibh. Aliquam cursus eros sed justo.', 
      length: 12, 
      date: '01/01/2020', 
      course_code: 'asdfg_1245' 
    },
    { 
      name: 'Business & Management Studies', 
      teacher: 'Mrs Andrew', 
      description: 'Nulla felis magna, mollis eget congue euismod, imperdiet sed nibh. Aliquam cursus eros sed justo.', 
      length: 20, 
      date: '01/01/2020', 
      course_code: 'asdfg_12446' 
    },
    { 
      name: 'Chemical Engineering', 
      teacher: 'Mr Emily', 
      description: 'Nulla felis magna, mollis eget congue euismod, imperdiet sed nibh. Aliquam cursus eros sed justo.', 
      length: 22, 
      date: '01/01/2020', 
      course_code: 'asdfg_12347' 
    },
    { 
      name: 'Civil Engineering', 
      teacher: 'Mr Elizabeth', 
      description: 'Nulla felis magna, mollis eget congue euismod, imperdiet sed nibh. Aliquam cursus eros sed justo.', 
      length: 22, 
      date: '01/01/2020', 
      course_code: 'asdfg_1248' 
    },
    { 
      name: 'Classics & Ancient History', 
      teacher: 'Mr Andrew', 
      description: 'Nulla felis magna, mollis eget congue euismod, imperdiet sed nibh. Aliquam cursus eros sed justo.', 
      length: 24, 
      date: '01/01/2020', 
      course_code: 'asdfg_1249' 
    },
    { 
      name: 'Communication & Media Studies', 
      teacher: 'Mr Mila', 
      description: 'Nulla felis magna, mollis eget congue euismod, imperdiet sed nibh. Aliquam cursus eros sed justo.', 
      length: 26, 
      date: '01/01/2020', 
      course_code: 'asdfg_1250' 
    },
    { 
      name: 'Complementary Medicine', 
      teacher: 'Mrs Ella', 
      description: 'Nulla felis magna, mollis eget congue euismod, imperdiet sed nibh. Aliquam cursus eros sed justo.', 
      length: 22, 
      date: '01/01/2020', 
      course_code: 'asdfg_1251' 
    },
    { 
      name: 'Computer Science', 
      teacher: 'Mr Avery', 
      description: 'Nulla felis magna, mollis eget congue euismod, imperdiet sed nibh. Aliquam cursus eros sed justo.', 
      length: 22, 
      date: '01/01/2020', 
      course_code: 'asdfg_1252' 
    },
    { 
      name: 'Counselling', 
      teacher: 'Mr Sofia', 
      description: 'Nulla felis magna, mollis eget congue euismod, imperdiet sed nibh. Aliquam cursus eros sed justo.', 
      length: 4, 
      date: '01/01/2020', 
      course_code: 'asdfg_1253' 
    },
  ])
}