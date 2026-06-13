# Shadcn/UI - Big Calendar

> **Install in one command** — themed React Big Calendar for any shadcn/ui project:

```bash
npx shadcn@latest add list-jonas/shadcn-ui-big-calendar/big-calendar
```

<sub>📋 Hover the block above and click the copy icon. Full options in [Install via shadcn](#-install-via-shadcn-one-command).</sub>

---

Welcome to the **Shadcn/UI - Big Calendar** repository! This project showcases a customized **React Big Calendar** styled using **Shadcn's CSS variables**, enabling dynamic theme adaptation. This is a purely **CSS-based solution**, ensuring smooth integration and consistent visual experiences across different themes.

---

## 🚀 Live Preview

Experience the live demo of the calendar in action:  
[Live Preview](https://shadcn-ui-big-calendar.vercel.app/)

### Screenshots

#### 🌙 Dark Theme - Week View
![Dark Theme - Month View](/images/dark_week.png)

#### ☀️ Light Theme - Week View
![Light Theme - Week View](/images/light_week.png)

---

## ⚡ Install via shadcn (one command)

This repo is a [shadcn GitHub registry](https://ui.shadcn.com/docs/registry/github). Drop the themed calendar into any shadcn/ui project with a single command:

```bash
npx shadcn@latest add list-jonas/shadcn-ui-big-calendar/big-calendar
```

This installs the calendar wrapper component and the theming stylesheet into `components/shadcn-big-calendar/`, and adds the `react-big-calendar` runtime dependency (plus its types).

Optional — the demo create-event form (react-hook-form + zod, used in the dialog):

```bash
npx shadcn@latest add list-jonas/shadcn-ui-big-calendar/event-form
```

Pin to a branch, tag, or commit with `#ref`, and inspect items before installing:

```bash
npx shadcn@latest add list-jonas/shadcn-ui-big-calendar/big-calendar#main
npx shadcn@latest view list-jonas/shadcn-ui-big-calendar/big-calendar
```

### Usage after install

```tsx
import moment from "moment";
import { momentLocalizer } from "react-big-calendar";
import ShadcnBigCalendar from "@/components/shadcn-big-calendar/shadcn-big-calendar";

const localizer = momentLocalizer(moment);

export function MyCalendar() {
  return (
    <ShadcnBigCalendar
      localizer={localizer}
      style={{ height: 700 }}
      events={[]}
      // color events: return { className: "event-variant-primary" } (also -secondary, -outline)
      eventPropGetter={() => ({ className: "event-variant-primary" })}
    />
  );
}
```

---

## ✨ Introduction

**Shadcn/UI - Big Calendar** is an open-source project demonstrating how to style **React Big Calendar** using **Shadcn's CSS variables**. This project focuses solely on **CSS customization** for a seamless theme experience.

### Key Features:

- **Dynamic Theming:** Styles automatically adjust to the selected theme using Shadcn's CSS variables.
- **React Big Calendar Integration:** Utilizes React Big Calendar with custom Shadcn styles for a unique look.
- **Pure CSS Solution:** No JavaScript theme manipulation; just plug in the CSS and watch the themes change.

---

## 🚨 Important Files

To ensure the dynamic theming works correctly, make sure to include these key files in your project:

### CSS Styles

The essential **CSS stylesheet** that powers the Shadcn-themed calendar is located at:
  - [shadcn-big-calendar.css](https://github.com/list-jonas/shadcn-ui-big-calendar/blob/main/src%2Fcomponents%2Fshadcn-big-calendar%2Fshadcn-big-calendar.css)

**Important:** Make sure to include this stylesheet in your project to enable dynamic theming with Shadcn's variables. 

### TypeScript Component

The main calendar component that integrates React Big Calendar with the custom Shadcn styles:
  - [shadcn-big-calendar.ts](https://github.com/list-jonas/shadcn-ui-big-calendar/blob/main/src%2Fcomponents%2Fshadcn-big-calendar%2Fshadcn-big-calendar.ts)

---

## 📦 Installation Guide

Setting up the project is easy! Follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/list-jonas/shadcn-ui-big-calendar.git
    cd shadcn-ui-big-calendar
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. **Access the app:**
    Open your browser and go to [http://localhost:3000](http://localhost:3000) to see it in action.

---

## ⚙️ Usage Instructions

After setting up the project, here’s how you can use and customize the calendar:

1. **Explore the Calendar:**
   - Check out the dynamic theming in action.
   - Interact with the calendar to view events in different theme modes.

2. **Integrate Into Your Own Project:**
   - Use this project as a reference or starting point for adding a dynamically themed React Big Calendar to your Next.js app.

---

## 🛠️ Contributing

We welcome contributions from the community! If you find any bugs, have suggestions, or want to improve the project, feel free to submit an issue or a pull request.

### How to Contribute:

1. **Fork the repository** by clicking the "Fork" button at the top-right corner of this page.
2. **Clone your forked repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/shadcn-ui-big-calendar.git
    cd shadcn-ui-big-calendar
    ```
3. **Create a new branch:**
    ```bash
    git checkout -b your-branch-name
    ```
4. **Make your changes** and commit them with descriptive messages.
5. **Push your changes:**
    ```bash
    git push origin your-branch-name
    ```
6. **Create a pull request** with a detailed description of your changes.

---

## 🛡️ License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## 👨‍💻 Author

**Created by Jonas**  
For more projects and information, visit [My Website](https://jonas-list.vercel.app).

---

## 📊 Stats

- ![GitHub stars](https://img.shields.io/github/stars/list-jonas/shadcn-ui-big-calendar)
- ![GitHub forks](https://img.shields.io/github/forks/list-jonas/shadcn-ui-big-calendar)
- ![GitHub issues](https://img.shields.io/github/issues/list-jonas/shadcn-ui-big-calendar)
- ![GitHub pull requests](https://img.shields.io/github/issues-pr/list-jonas/shadcn-ui-big-calendar)
- ![GitHub views](https://komarev.com/ghpvc/?username=list-jonas&repo=shadcn-ui-big-calendar&color=blue)

---

## 📈 Star History

Check out the star history for this project:
<a href="https://star-history.com/#list-jonas/shadcn-ui-big-calendar&Date">
   <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=list-jonas/shadcn-ui-big-calendar&type=Date&theme=dark" />
      <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=list-jonas/shadcn-ui-big-calendar&type=Date" />
      <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=list-jonas/shadcn-ui-big-calendar&type=Date" />
   </picture>
</a>

---

Thank you for checking out the **Shadcn/UI - Big Calendar** project! We hope this helps you create a beautifully themed event calendar using just **CSS**. If you have any questions or feedback, feel free to reach out. Happy coding!
