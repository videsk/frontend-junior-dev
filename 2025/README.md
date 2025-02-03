# Test Frontend Junior Developer

This is a test that we create to recruitment process of frontend junior developer for [Videsk](https://videsk.io).

```
Follow the deadlines and rules where you got this link.
```

If you're a recruiter you're welcome to fork this repository and use it in your recruitment process.

In case you're a developer, use it as a homework to practice or learn how to build web components.

1. [Rules](#rules)
2. [Overview](#overview)
3. [Part 1: Create Custom Web Components](#part-1-create-custom-web-components)
   - [Tasks](#tasks)
     - [Task 1: Create Article Component](#task-1-create-article-component)
     - [Task 2: Create Articles List Component](#task-2-create-articles-list-component)
     - [Task 3: Create Author Component](#task-3-create-author-component)
   - [CSS Resources](#css-resources)
   - [Data Structures](#data-structures)
4. [Using the API](#using-the-api)
5. [Bonus](#bonus)
6. [Part 2: Smart Form Challenge](#part-2-smart-form-challenge)
   - [Overview](#overview-1)
   - [Requirements](#requirements)
   - [Submission Format](#submission-format)
   - [Evaluation Criteria](#evaluation-criteria)
   - [Tips](#tips)
   - [Questions to Consider](#questions-to-consider)
   - [Bonus Points](#bonus-points)
7. [Submission](#submission)
8. [Useful Resources](#useful-resources)

# Rules

1. Clone (not fork!) this repository 🚨🚨
2. Complete both parts of the test:
   - Implement the web components as specified in Part 1
   - Create your solution explanation for the Smart Form Challenge (Part 2)
3. Include your explanation in one of these ways:
   - Add a written explanation in `SOLUTION.md`
   - Add a link to your video/audio explanation in `SOLUTION.md`
   - Include your diagrams in the repository with explanations
4. Push your solution to your repository
5. Send the repository link to developers@videsk.io with:
   - Subject: "Frontend Dev Q1-2025"
   - Your name
   - Any additional context you want to share

> [!NOTE]  
> We'll verify the 5 days based on the time you took on send all commits to your repo

# Overview

You are required to create two types of custom web components: one for authors and another for articles. These components must fetch data from a REST API without authentication. The task includes creating a component for each article and another component to display all articles. You will also implement functionality to set the array of articles dynamically and display additional details upon interaction.

# Part 1: Create Custom Web Components

## Tasks

> [!TIP]
> You can define your own components name, but remember follow the best practices.

### Task 1: Create Article Component

- Display the title, image, company, and description.
- When the article is clicked, show the full content of the article.
- Fetch and display the author's information when the author's name is clicked.
- Ensure the component encapsulates its style and behavior using the Shadow DOM.
- Utilize HTML templates for the component's structure.
- Allow set all properties through setter and attributes
- Allow get all properties through getter

**Expected Result:**
A reusable custom web component that dynamically displays article details and fetches author information upon interaction.

### Task 2: Create Articles List Component

- Display a list of `article-item` components.
- Provide a method to set the articles array dynamically.
- Ensure the component encapsulates its style and behavior using the Shadow DOM.
- Utilize HTML templates for the component's structure.
- Allow set articles through setter
- Allow get all articles through getter

**Expected Result:**
A custom web component that dynamically renders a list of articles and updates based on the provided data array.

### Task 3: Create Author Component

- Display the author's name, avatar, birthdate, and bio.
- Add loading state IU through setter and getter property and attribute like `loading`
- Ensure the component encapsulates its style and behavior using the Shadow DOM.
- Utilize HTML templates for the component's structure.
- Allow set all properties through setter and attributes
- Allow get all properties through getter

**Expected Result:**
A reusable custom web component that dynamically displays author details upon interaction.

## CSS resources

You can optionally use Tailwind CSS in the styles of each component or your own.

Example using Tailwind:

```css
.my-style {
   @apply w-full h-full;
}
```

### Data Structures

**Article:**
```json
{
  "publishedAt": "2024-06-05T03:29:00.248Z",
  "title": "officia odio tempora",
  "image": "https://loremflickr.com/640/480",
  "company": "Brakus, Hyatt and Lesch",
  "description": "Rerum molestiae quod numquam nisi aut...",
  "content": "Veniam sint dolorum corporis vitae porro rem maiores earum doloribus...",
  "id": "24",
  "author": "24"
}
```

**User:**
```json
{
  "createdAt": "2024-06-04T14:44:52.367Z",
  "name": "Matthew Sanford",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/701.jpg",
  "birthdate": "1999-07-13T03:40:56.697Z",
  "bio": "Sequi cum unde alias. Atque blanditiis numquam facilis...",
  "id": "1",
  "articles": []
}
```

# Using the API

Base URL: https://5fb46367e473ab0016a1654d.mockapi.io/

The REST API provides two main endpoints to fetch data: `/users` and `/articles`. Both endpoints support the following functionalities:

- **Find by ID:** `/users/:id` and `/articles/:id`
- **Search by Field:** Use the `search` parameter to match any field.
- **Limit Results:** Use the `limit` parameter to limit the number of records.
- **Sort Results:** Use `sortBy` to specify the field to sort by, and `order` to set the sorting order (`asc` for ascending, `desc` for descending).
- **Order by Field:** Use the `orderby` parameter to specify the field to order the results.

### Example usage

1. **Fetch All Users:**
   ```http
   GET /users
   ```

2. **Fetch a Specific User by ID:**
   ```http
   GET /users/:id
   ```

3. **Fetch Users with Search and Limit:**
   ```http
   GET /users?search=Matthew&limit=5
   ```

4. **Fetch All Articles:**
   ```http
   GET /articles
   ```

5. **Fetch a Specific Article by ID:**
   ```http
   GET /articles/:id
   ```

6. **Fetch Articles with Search and Sort:**
   ```http
   GET /articles?search=officia&sortBy=publishedAt&order=desc
   ```

### Documentation Reference

For more detailed information about filtering and querying, refer to the [MockAPI documentation](https://github.com/mockapi-io/docs/wiki/Code-examples#filtering).

# Bonus

> [!NOTE]  
> Bonus are optional

1. Create filters and sorter for articles, considering the feature should be able accesible through a method like `element.search()` or `element.sort()`. So the UI should use that properties.
2. Use `slot` on `articles` component to replace the default article and/or author component with any HTML.

# Part 2: Smart Form Challenge

You are building an address form system for an e-commerce platform. Instead of coding, we want you to explain your thought process about how you would solve this challenge.

## Overview
Create a modular solution for a dynamic address form that adapts based on user input and country-specific requirements.

> [!TIP]
> We're more interested in your thinking process and problem-solving approach than technical implementation details.

## Requirements

The form should:
- Change its fields based on the selected country
- Auto-complete city information when a postal code is entered
- Validate data according to country-specific rules
- Show/hide fields dynamically based on user input
- Handle loading states and errors appropriately

Explain your solution focusing on these key aspects:

### 1. Component Structure
- What "building blocks" or components would you need?
- What would be the responsibility of each component?
- How would you organize these components?

### 2. Component Communication
- How would components share information?
- What happens when a user changes the country?
- How would the postal code component know about country changes?
- How would the city field know when to auto-complete?

### 3. Problem Solving
- What problems might users encounter?
- How would you handle slow internet connections?
- What happens if a user changes values rapidly?
- How would you manage validation errors?

## Submission Format

Choose ONE of these formats to explain your solution:
1. Written explanation (max 1000 words)
2. Short video (max 10 minutes)
3. Audio explanation (max 10 minutes)
4. Simple diagrams with explanations

Your explanation should be clear and focused on HOW components work together rather than technical implementation details.

## _Example_ Snippet of a Good Response

"Here's how I would structure this solution:

1. Main Form Controller
   - This would be the 'brain' of the form
   - Responsible for:
     * Keeping track of all field values
     * Deciding which fields to show/hide
     * Coordinating between components

2. Individual Field Components
   - Country Selector:
     * Holds the list of available countries
     * Triggers updates when country changes
   - Postal Code Field:
     * Adapts validation rules based on country
     * Triggers city auto-complete
   - City Field:
     * Can be in regular or auto-complete mode
     * Shows loading state when looking up data

3. Component Communication Flow
   When someone selects a new country:
   - Country field notifies form controller
   - Form controller updates postal code requirements
   - Postal code field adjusts its validation rules
   - City field clears its value and waits for new input

4. Error Handling
   - Show loading indicators during async operations
   - Preserve user input when possible
   - Display clear error messages
   - Allow easy correction of invalid data..."

## Evaluation Criteria

We will evaluate your response based on:

1. Ability to break down complex problems
2. Understanding of component relationships
3. Consideration of user experience
4. Clear communication of ideas
5. Awareness of potential issues and solutions

## Tips

- Focus on explaining how pieces work together
- Think about the user experience
- Consider edge cases and error scenarios
- Don't worry about specific programming syntax
- Use simple, clear language
- Be specific in your examples

## Questions to Consider

- How would you add new validation rules later?
- How would your solution handle multiple forms on the same page?
- How would you make your solution easy to maintain?
- How would you handle form state when browser back button is used?


## Bonus Points
- Consideration of accessibility
- Thoughts on performance optimization
- Ideas for testing your solution
- Suggestions for future improvements

# Submission

Upload your solution to your GitHub repository and share the link to developers@videsk.io with the subject "Frontend Dev Q1-2025" also your name and some optional explanation of your code.

# Useful Resources

- [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- [HTML Templates](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
