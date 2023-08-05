
# Surgery Sidekick

The Surgery Scheduling System is a web application designed to help streamline the process of scheduling surgeries for a medical facility. It provides a Kanban-style user interface for easy visualization and management of surgery requests, patient information, and surgical team assignments.



## Features

- **Kanban Board Interface:** Organize surgery requests into columns based on their status, such as "New Requests," "Scheduled," "Completed," etc.

- **Patient Management:** Store and manage patient information, including name, medical record number (MRN), insurance details, and contact information.

- **Surgery Details:** Track surgery details, including the surgery date, pre-surgery appointment date, assigned provider, imaging requirements, clearances, and additional comments.

- **Surgical Team Assignment:** Assign surgeons and physician assistants (PAs) to surgeries and track the surgical team for each procedure.

- **Real-Time Updates:** The Kanban board updates in real-time to keep all users informed about the latest changes to the surgery schedule.

## Tech Stack

- **Front-end:** React.js, CSS, HTML.

- **Back-end:** Python (Flask or Django) with SQLite database.

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing purposes.

1. **Prerequisites:** Ensure you have Node.js, npm, and Python installed on your system.

2. **Clone the Repository:** `git clone https://github.com/yourusername/surgery-scheduling.git`

3. **Front-end Setup:** Navigate to the `surgery-scheduling` directory and run `npm install` to install the required dependencies.

4. **Back-end Setup:** (Assuming you have Python and pip installed) Create a virtual environment, activate it, and install the required Python dependencies:

   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate    # On Windows, use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```

5. **Database Setup:** The SQLite database is already included in the repository (`surgery_scheduler.db`), and it contains some sample data. If you wish to start with a clean database, delete the existing database file and create a new one using the instructions in the backend section.

6. **Run the Application:** Start the React development server and the Python server by running the following commands in separate terminal windows:

   ```bash
   # In the root directory of the project
   npm start

   # In the backend directory
   python app.py
   ```

   The React app will run on `http://localhost:3000`, and the Python server will run on `http://localhost:5000`.

7. **Contributing:** If you'd like to contribute to the project, feel free to open issues and pull requests with your improvements.

## License

This project is licensed under the [MIT License](LICENSE).

---
