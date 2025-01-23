# cloudify Table Assignment

## **Objective**
This project demonstrates the implementation of a functional, visually appealing table using React. The application includes features like single-select dropdowns, multi-select dropdowns, dynamic addition of options, and the ability to add new rows.

---

## **Features**

### 1. **Single Select Dropdown (Fruits)**
- Each row includes a single select dropdown in the first column.
- Options in the dropdown are static and predefined.
- Once an item is selected in one row, it is disabled for other rows to prevent duplication.

### 2. **Multi-Select Dropdown (Colors)**
- The second column contains a multi-select dropdown.
- Users can select multiple options from a predefined list.
- A component at the bottom of the dropdown allows users to dynamically add new items to the list.
- The added options are immediately available for selection.

### 3. **Add New Row Button**
- At the bottom of the table, there is a button labeled **"Add New Row"**.
- Clicking this button appends a new row at the bottom of the table.
- Each new row includes the single-select and multi-select dropdowns with all functionalities intact.

---

## **Technologies Used**
- **React**: For building the user interface.
- **CSS**: For styling the application.
- **React State Management**: To handle dropdown selections and dynamically update rows and options.

---

## **Table Wireframe**
The table is designed as per the following wireframe:

![Wireframe](./path-to-wireframe-image.png)

---

## **How to Run the Application**

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v14 or above)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd react-table-assignment
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   

4. Start the development server:
   ```bash
   npm start
   ```
   

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## **Folder Structure**
```
react-table-assignment/
|-- src/
|   |-- components/
|   |   |-- Events
|   |       |-- index.js
|   |       |-- index.css
|   |-- App.js
|   |-- App.css
|-- public/
|-- package.json
```

---

## **Customization**
To customize the dropdown options or styles:

1. **Modify Options**:
   - Single-select options are defined in the state variable `singleOptions`.
   - Multi-select options are defined in the state variable `multiOptions`.

2. **Styling**:
   - All CSS styles can be found in `App.css`.
   - Adjust the class names in the JSX if necessary to apply specific styles.

---

## **Future Improvements**
- Add form validation for dynamic input fields.
- Integrate a backend to fetch and store dropdown options dynamically.
- Enhance responsiveness for mobile devices.

---

## **License**
This project is licensed under the MIT License. Feel free to use and modify the code as needed.

