interface FaqData {
    id: string;
    title: string;
    text: string;
  }
  
  interface FAQ {
    id: string;
    title?: string;
    data: FaqData[];
    description?: string;
  }
  
const faqs: FAQ[] = [
  {
    id: "1",
    data: [
      {
        id: "1",
        title: "What is IQLAND.ai?",
        text: `IQLAND.ai is a cutting-edge platform tailored for modern developers, real estate agents, wholesalers, and homebuyers. It offers a suite of tools and insights for single-family home development, ensuring alignment with local zoning regulations. Our platform suggests perfect house plans based on your site's potential, provides real-time construction costs, projected property values, and features an interactive "MarketPlace" for listing and sharing property reports.`
      },
      {
        id: "2",
        title: "When will IQLAND.ai be available?",
        text: "The platform is set to launch in a few weeks. Interested users can sign up to join our waitlist, and we will notify you as soon as it goes live."
      },
      {
        id: "3",
        title: "How is the IQLAND.ai dashboard unique?",
        text: "The IQLAND.ai dashboard stands out for its dynamic interactivity. Users can modify numerous structural features, such as height and square footage, and the dashboard instantly recalculates construction costs, projected post-completion values, and equity scenarios, offering unparalleled real-time insights."
      },
      {
        id: "4",
        title: "How expansive is the IQLAND.ai house plan catalog?",
        text: "We boast an extensive database of over 30,000 house plans, tailored to meet the zoning and aesthetic needs of nearly every parcel. Our platform uses meticulous zoning analysis to align these plans perfectly with your parcel's unique attributes."
      },
      {
        id: "5",
        title: "Can you elaborate on the services provided for realtors?",
        text: "Realtors can utilize IQLAND.ai to swiftly identify optimal house plans for any parcel, reducing the time and effort typically required for site evaluation. This allows realtors to present clients with well-informed options and facilitates faster deal closures."
      },
      {
        id: "6",
        title: "How can wholesalers take advantage of IQLAND.ai?",
        text: "Wholesalers can use IQLAND.ai to enhance the value proposition of their parcels. The platform allows them to showcase potential house plans and their associated financial projections, making the parcels more attractive to potential buyers and accelerating sales cycles."
      },
      {
        id: "7",
        title: "What benefits do developers gain with IQLAND.ai?",
        text: "Developers can use IQLAND.ai to quickly identify house plans that are not only compliant with local zoning regulations but also aesthetically and functionally optimized for the parcel. This efficiency translates into saved time and reduced project risks."
      },
      {
        id: "8",
        title: "How can investors leverage IQLAND.ai?",
        text: "Investors can gain in-depth insights into localized construction costs, projected property values, and potential equity scenarios. This real-time data significantly reduces analysis time, giving investors the ability to make quick, informed decisions."
      },
      {
        id: "9",
        title: "What is the pricing structure for IQLAND.ai services?",
        text: 'The "MarketPlace" is free to access and each listed property there also comes with the powerful features of our interactive dashboard. For a single property report, which includes full dashboard functionality, the cost is $49.95.'
      },
      {
        id: "10",
        title: "How can I get involved with IQLAND.ai before the launch?",
        text: "To be among the first to experience IQLAND.ai, simply sign up for our waitlist through the website. We will notify you when the platform is live."
      },
    ]
  }
]

export { faqs }