interface FaqData {
    id: string;
    title: string;
    text: string;
  }
  
  interface FAQ {
    id: string;
    title: string;
    data: FaqData[];
    description?: string;
  }
  

const faqs: FAQ[] = [
    {
      id: "1",
      title: "Using iqland.ai:",
      data: [
        {
          id: "1",
          title: "How much does it cost to use iqland.ai?",
          text: "iqland.ai is priced at $50 per report. Each report provides you with a comprehensive analysis of your chosen parcel's development potential and associated insights.",
        },
        {
          id: "2",
          title: "What is your refund policy?",
          text: "All sales of iqland.ai reports are final. We recommend reviewing our product description and FAQs to ensure it meets your needs before making a purchase.",
        },
        {
          id: "3",
          title: "How will I receive the iqland.ai report?",
          text: "Once your report is ready, you can view it on the iqland.ai dashboard.  You can also request that it be sent to your email address. You can also conveniently share the report with your team for collaborative decision-making.",
        },
        {
          id: "4",
          title:
            "Can I share the iqland.ai report with my colleagues and partners?",
          text: "Yes, you can easily share the report with your team members, stakeholders, or partners to facilitate collaborative discussions and planning.",
        },
      ],
    },
    {
      id: "2",
      title: "Ideal Users and Benefits:",
      data: [
        {
          id: "1",
          title: "Who can benefit from using iqland.ai?",
          text: "iqland.ai is designed to cater to builders, contractors, developers, real estate agents, and wholesalers, offering valuable insights for their land development and construction projects.",
        },
        {
          id: "2",
          title: "How does iqland.ai help in the real estate market?",
          text: "In today's competitive real estate market, iqland.ai provides a significant advantage by expediting due diligence, saving time, and enabling stakeholders to make swift and informed decisions.",
        },
        {
          id: "3",
          title: "How does iqland.ai save time for users?",
          text: "iqland.ai drastically reduces the time spent on research and analysis, transforming what could take days into a matter of minutes. It's a game-changer for time-sensitive projects.",
        },
        {
          id: "4",
          title:
            "What kind of advantage does iqland.ai provide to builders and developers?",
          text: "iqland.ai equips builders and developers with accurate zoning information, cost estimates, and future value predictions, enabling them to plan projects strategically and with confidence.",
        },
        {
          id: "5",
          title: "How can real estate agents benefit from using iqland.ai?",
          text: "Real estate agents can use iqland.ai to provide clients with data-driven insights on potential properties, enhancing their advisory role and fostering client trust.",
        },
      ],
    },
    {
      id: "3",
      title: "Getting Started:",
      data: [
        {
          id: "1",
          title: "How do I begin using iqland.ai?",
          text: "Getting started is easy. Simply visit our website, create an account, choose a parcel of land, and purchase a report for $50 to unlock a wealth of invaluable information.",
        },
        {
          id: "2",
          title: "Can I use iqland.ai for multiple parcels of land?",
          text: "Yes, you can use iqland.ai for as many parcels as needed. Each report is tailored to the specific parcel you select, providing you with accurate insights for each project.",
        },
        {
          id: "3",
          title: "Is there a demo or trial version available?",
          text: "Currently, we do not offer a demo or trial version. However, our detailed FAQs and company profile can provide you with a comprehensive overview of what iqland.ai offers.",
        },
      ],
    },
    {
      id: "4",
      title: "Interactive Dashboard and Customization",
      data: [
        {
          id: "1",
          title: "What is the interactive dashboard offered by iqland.ai?",
          text: "The interactive dashboard is a dynamic tool that empowers users to customize their land development project parameters, such as square footage, bedroom count, and more, to generate new results for parcel recommendations.",
        },
        {
          id: "2",
          title: "How can I access the interactive dashboard?",
          text: " Once you have purchased a report, you will have access to the interactive dashboard through your iqland.ai account. It's a user-friendly interface designed for easy customization.",
        },
        {
          id: "3",
          title:
            "What customization options are available on the interactive dashboard?",
          text: "The interactive dashboard enables you to adjust various project parameters, including square footage, bedroom count, bathroom count, garage spaces, and basement presence, to tailor results to your specific preferences.",
        },
        {
          id: "4",
          title:
            "How does the interactive dashboard impact construction costs?",
          text: "When you modify parameters on the interactive dashboard, iqland.ai dynamically recalculates construction costs based on your changes, providing you with accurate estimates for your custom project.",
        },
        {
          id: "5",
          title:
            "Can I adjust square footage and other factors without affecting other data?",
          text: "Yes, iqland.ai's interactive dashboard ensures that all related data, such as construction costs, equity, and value predictions, are automatically adjusted to reflect your new project specifications.",
        },
        {
          id: "6",
          title: "How does using the interactive dashboard benefit my project?",
          text: "The interactive dashboard allows you to explore a wide range of project possibilities without having to create multiple reports. This streamlines your decision-making process and helps you identify the most suitable options.",
        },
        {
          id: "7",
          title:
            "Can I experiment with different options to see how they impact the project?",
          text: "Absolutely. You can experiment with various combinations of factors on the interactive dashboard to see how changes influence construction costs, equity, and predicted value.",
        },
        {
          id: "8",
          title: "How does the interactive dashboard enhance customization?",
          text: "The interactive dashboard empowers you to fine-tune your project based on your preferences and budget. It ensures that all data remains accurate and aligned with your chosen specifications.",
        },
        {
          id: "9",
          title: "Can I save and compare different dashboard configurations?",
          text: "At present, iqland.ai's interactive dashboard does not offer a save or comparison feature. However, you can manually note down the results of different configurations for reference.",
        },
        {
          id: "10",
          title: "Is using the interactive dashboard user-friendly?",
          text: "Yes, the interactive dashboard is designed with user-friendliness in mind, enabling you to effortlessly modify parameters and receive real-time updates on associated data.",
        },
      ],
      description:
        "Feel free to explore the interactive dashboard to customize your project and gain deeper insights into how different factors impact your land development plans. It's a powerful tool designed to empower your decision-making process.",
    },
    {
      id: "5",
      title: "Efficient Due Diligence:",
      data: [
        {
          id: "1",
          title:
            "What is due diligence in land development, and why is it important?",
          text: "Due diligence refers to the thorough investigation and analysis of a property before embarking on a development project. It ensures that all relevant factors, such as zoning regulations and property attributes, are considered to make informed decisions.",
        },
        {
          id: "2",
          title: "How does iqland.ai simplify due diligence?",
          text: "iqland.ai utilizes advanced algorithms to quickly assess critical factors like setback, FAR, maximum height, and lot coverage rules, streamlining the process of evaluating a parcel's development potential.",
        },
        {
          id: "3",
          title:
            "Can iqland.ai help me understand if my project aligns with local zoning rules?",
          text: "Absolutely. Our software applies zoning rules to your parcel, ensuring your project adheres to local regulations, and provides zoning classification and codes for reference.",
        },
        {
          id: "4",
          title: "What is the benefit of having an online zoning guide?",
          text: "Our online zoning guide is a comprehensive resource that offers detailed insights into local zoning requirements. It helps users understand regulations, increasing compliance and project success.",
        },
        {
          id: "5",
          title:
            "How does iqland.ai's footprint plotting enhance due diligence?",
          text: "After applying zoning rules, our software plots your building's footprint on the parcel, offering a visual representation of the project's alignment with the land. This aids in making informed decisions.",
        },
      ],
    },
    {
      id: "6",
      title: "Access to Construction Ready Plans:",
      data: [
        {
          id: "1",
          title: "What are construction ready plans?",
          text: "Construction ready plans are pre-designed architectural blueprints that are ready for implementation. They encompass various styles, layouts, and features, catering to diverse project needs.",
        },
        {
          id: "2",
          title: "How many plans are available in iqland.ai's database?",
          text: "Our database boasts over 30,000 construction ready plans, providing a wide array of options to suit various preferences and requirements.",
        },
        {
          id: "3",
          title: "Can I find plans that match specific architectural styles?",
          text: "Yes, you can explore plans in styles like Ranch, craftsman, contemporary, and vacation homes, ensuring you find a design that resonates with your vision.",
        },
        {
          id: "4",
          title:
            "How can iqland.ai help me choose the right plan for my parcel?",
          text: "Our software evaluates zoning regulations and matches them to compatible plans, ensuring your chosen plan complies with local rules and suits your project needs.",
        },
        {
          id: "5",
          title: "What if I need to modify a construction ready plan?",
          text: "iqland.ai offers the flexibility to customize plans based on your preferences, allowing you to adapt a chosen plan to your specific requirements.",
        },
      ],
    },
    {
      id: "7",
      title: "Understanding Construction Ready Plans:",
      data: [
        {
          id: "1",
          title: "What are construction ready plans?",
          text: "Construction ready plans are comprehensive architectural blueprints that detail every aspect of a building design, including layout, dimensions, materials, and construction details, ready for implementation.",
        },
        {
          id: "2",
          title: "How can I purchase construction ready plans?",
          text: "You can conveniently purchase construction ready plans directly through our website. Browse the available plans, choose the one that suits your project, and complete the purchase process.",
        },
        {
          id: "3",
          title: "What is the price range for construction ready plans?",
          text: "Prices for construction ready plans vary based on the complexity and size of the design. Our plans range from $500 to $5000, offering options for various budgets.",
        },
        {
          id: "4",
          title: "Can I customize the construction ready plans?",
          text: "While our plans are designed to be ready for construction, there might be room for limited customization. Feel free to inquire about specific modifications when considering a plan.",
        },
        {
          id: "5",
          title:
            "Are the prices for construction ready plans inclusive of any additional fees?",
          text: "The prices listed for our construction ready plans cover the design and blueprint. Additional costs, such as permits and licenses, may apply and should be factored into your project budget.",
        },
      ],
    },
    {
      id: "8",
      title: "Architects and Design Costs:",
      data: [
        {
          id: "1",
          title: "Can architects help with modifying the purchased plans?",
          text: "Yes, architects can assist in adapting the purchased plans to meet your specific needs. They can make adjustments while ensuring compliance with local regulations and design principles.",
        },
        {
          id: "2",
          title: "How much do architects typically charge for their services?",
          text: "Architect fees vary, but a common practice is for architects to charge around 15% to 20% of the total construction costs for their design and consulting services.",
        },
        {
          id: "3",
          title:
            "Can I engage an architect to design a custom plan from scratch?",
          text: "Absolutely. If you have a unique vision in mind, architects can create custom plans tailored to your preferences, site conditions, and regulatory requirements.",
        },
        {
          id: "4",
          title:
            "Can I choose a construction ready plan and hire an architect later?",
          text: "Yes, you can select a construction ready plan and engage an architect afterward for any necessary modifications or adjustments to align the plan with your specific needs.",
        },
        {
          id: "5",
          title: "How can an architect add value to my construction project?",
          text: "Architects bring expertise in design, functionality, and regulatory compliance. They can help optimize space, improve energy efficiency, and ensure the final structure meets your goals.",
        },
      ],
    },
    {
      id: "9",
      title: "Predicting Future Value and Construction Costs:",
      data: [
        {
          id: "1",
          title:
            "How does iqland.ai predict the future value of a constructed home?",
          text: "Our software analyzes today's comparable sales data and factors in various variables to provide an estimate of the future value of the home based on current market trends.",
        },
        {
          id: "2",
          title: "What is the significance of local construction cost data?",
          text: "Local construction cost data enables iqland.ai to accurately estimate building costs associated with the selected plan, ensuring realistic budgeting.",
        },
        {
          id: "3",
          title:
            "What are the different levels of construction costs offered by iqland.ai?",
          text: "iqland.ai provides estimates for average, custom, and luxury construction costs, catering to a range of project budgets and aspirations.",
        },
        {
          id: "4",
          title:
            "How does knowing equity and monthly payments help in planning?",
          text: "Calculating equity and monthly payments offers financial clarity, helping you understand the financial implications of your project and make well-informed decisions.",
        },
        {
          id: "5",
          title:
            "Can I get construction estimates for multiple construction ready plans?",
          text: "Yes, iqland.ai provides equity,  local price per square foot estimates , and total construction cost predictions for each plan you select, allowing you to compare options.",
        },
      ],
    },
    {
      id: "10",
      title: "Disclaimer and Disclosure",
      data: [
        {
          id: "1",
          title: "What is the purpose of the disclaimer and disclosure?",
          text: "The disclaimer and disclosure are intended to inform users about the limitations of iqland.ai and the importance of seeking advice from local professionals before proceeding with any construction project.",
        },
        {
          id: "2",
          title: "Why is it recommended to consult local professionals?",
          text: "While iqland.ai offers valuable insights, it is crucial to consult with professionals like contractors, land surveyors, and engineers who have in-depth knowledge of local conditions, regulations, and site-specific challenges.",
        },
        {
          id: "3",
          title: "What is the scope of iqland.ai's guidance?",
          text: "iqland.ai serves as a guide to assess major due diligence questions and provide preliminary information. However, it cannot account for all site-specific variables that might affect a project's feasibility.",
        },
        {
          id: "4",
          title:
            "What are some unknown factors that iqland.ai might not pick up on?",
          text: "iqland.ai might not capture geological conditions, soil quality, water table levels, environmental considerations, easements, or complex utility connections that can significantly impact construction.",
        },
        {
          id: "5",
          title:
            "Is iqland.ai responsible for inaccuracies in the information provided?",
          text: "iqland.ai does not take responsibility for any inaccuracies in the provided information. Users are advised to cross-reference information, consult local professionals, and conduct proper due diligence.",
        },
        {
          id: "6",
          title:
            "Can relying solely on iqland.ai lead to uninformed decisions?",
          text: "Relying solely on iqland.ai's information without seeking advice from local professionals can result in incomplete or inaccurate project assessments, leading to uninformed decisions.",
        },
        {
          id: "7",
          title:
            "How can users mitigate risks associated with land development projects?",
          text: "Users can mitigate risks by conducting thorough site inspections, engaging local experts, performing soil tests, and obtaining all necessary permits before initiating any construction.",
        },
        {
          id: "8",
          title: "Can iqland.ai replace the need for professional advice?",
          text: "iqland.ai is not a substitute for professional advice. Local professionals possess specialized knowledge that is essential for accurate project assessment and successful execution.",
        },
        {
          id: "9",
          title:
            "Can the information provided by iqland.ai guarantee project success?",
          text: "No, the information provided by iqland.ai cannot guarantee project success. Project outcomes depend on various factors beyond the scope of iqland.ai's assessment.",
        },
        {
          id: "10",
          title:
            "Is iqland.ai liable for project outcomes based on its information?",
          text: "iqland.ai is not liable for project outcomes, decisions made based on its information, or any consequential damages resulting from the use of its services.",
        },
        {
          id: "11",
          title: "How should users use iqland.ai's information responsibly?",
          text: "Users should use iqland.ai's information as an initial guide and collaborate with local professionals to make informed decisions based on accurate and site-specific information.",
        },
      ],
      description:
        "It is essential to understand the limitations of iqland.ai and consult local professionals to ensure your project's success. The disclosure highlights that various factors can impact construction feasibility, and iqland.ai cannot replace the expertise of local experts.",
    },
  ];

export { faqs }