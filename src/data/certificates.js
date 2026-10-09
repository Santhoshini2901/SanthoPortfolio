// ============================================================
//  CERTIFICATES — each certificate is one object.
//  To ADD one: copy an object, change the text.
//  To REMOVE one: delete its object.
//
//  image:  import or path of your certificate picture, e.g.
//          put the file in src/assets/certificates/ and use the
//          file name below (e.g. image: 'infosys-dsa.jpg').
//          Leave '' to show a placeholder.
//  verifyUrl: the certificate's verification link, or ''.
// ============================================================
export const certificates = [
  {
    id: 'infosys-dsa',
    title: 'DSA Using Python',
    issuer: 'Infosys',
    image: 'src/assets/certificates/DSA-certificate.jpg',
    verifyUrl: '',
  },
  {
    id: 'infosys-java',
    title: 'Java Foundation',
    issuer: 'Infosys',
    image: 'src/assets/certificates/Java-achivement.jpg',
    verifyUrl: '',
  },
  {
    id: 'gl-english',
    title: 'Smart English Basics for Professionals',
    issuer: 'Great Learning',
    image: 'src/assets/certificates/greatlearning-certificate.jpg',
    verifyUrl: '',
  },
  {
    id: 'cit-events',
    title: 'Event Participation Certificates',
    issuer: 'CIT Coimbatore',
    image: 'src/assets/certificates/CITEvent-certificate.jpeg',
    verifyUrl: '',
  },
  {
    id: 'python-aiml-internships',
    title: 'AI/ML Internship Certificates',
    issuer: 'Vazhai',
    image: 'src/assets/certificates/Vazhai-AIMLcertifications.jpeg',
    verifyUrl: '',
  },
  {
    id: 'other-technical',
    title: 'Java Programming',
    issuer: 'Infosys'
    image: 'src/assets/certificates/Javaprogramming-certificate.jpg',
    verifyUrl: '',
  },
]
