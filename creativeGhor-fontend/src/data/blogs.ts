export type Blog = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image: string;
  date: string;
};

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Top 5 Gadgets to Boost Your Productivity in 2024",
    slug: "top-5-gadgets-2024",
    summary:
      "Discover the latest gadgets that can help you work smarter and faster this year.",
    content: `
      <p>Staying productive is easier with the right tools. In this article, we highlight the top 5 gadgets that are making waves in 2024:</p>
      <ul>
        <li><b>Smart Notebooks</b> – Digitize your notes instantly.</li>
        <li><b>Wireless Charging Stations</b> – Keep all your devices powered up.</li>
        <li><b>Noise-Cancelling Headphones</b> – Focus better, anywhere.</li>
        <li><b>Portable Monitors</b> – Expand your workspace on the go.</li>
        <li><b>Smart Planners</b> – Organize your day with AI assistance.</li>
      </ul>
      <p>Upgrade your workflow and see the difference!</p>
    `,
    image: "/public/images/electornics.webp",
    date: "2024-07-01",
  },
  {
    id: "2",
    title: "How to Choose the Perfect Laptop for Your Needs",
    slug: "choose-perfect-laptop",
    summary:
      "A step-by-step guide to picking the best laptop for work, study, or play.",
    content: `
      <p>Choosing a laptop can be overwhelming. Here are some tips:</p>
      <ol>
        <li>Define your primary use (work, gaming, design, etc.).</li>
        <li>Set a budget and stick to it.</li>
        <li>Check battery life and portability.</li>
        <li>Compare specs: RAM, storage, processor.</li>
        <li>Read reviews and ask for recommendations.</li>
      </ol>
      <p>With these tips, you'll find the perfect match in no time!</p>
    `,
    image: "/public/images/laptop-blog.jpg",
    date: "2024-07-02",
  },
  {
    id: "3",
    title: "Why Shopping Online is Safer Than Ever in 2024",
    slug: "online-shopping-safety-2024",
    summary:
      "Explore the latest security features that protect your online purchases.",
    content: `
      <p>Online shopping has become more secure thanks to:</p>
      <ul>
        <li>Advanced encryption technologies</li>
        <li>Multi-factor authentication</li>
        <li>Trusted payment gateways</li>
        <li>Buyer protection policies</li>
      </ul>
      <p>Shop with confidence and enjoy the convenience!</p>
    `,
    image: "/public/images/hotDeal.webp",
    date: "2024-07-03",
  },
];
