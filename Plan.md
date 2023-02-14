# APPROACH FOR BUILDING THE APPLICATION Components
 # COMPONENTS
   
   # LAYOUT -- It Contains Main Layouts of the Application i.e Sidebar, Hero and Home.
        # HERO -- It Contains the Main Application Details i.e App Installs, Active Installs ......
               -- This is the Component which will be Initialized when the Application LOADS, so this is the BEST Place to FETCH Required Data From the API.
          # HeroDescription -- This is the CHILD Component of Hero Component, Which Describes the FORMAT of the Contents of the Hero and How they are Going to be Shown in the App.

        # HOME -- It Contains the Search Functionality and the TABLE Section.
               -- This is the Component which will be Initialized when the Application LOADS, so this is the BEST Place to FETCH Required Data for the TAble From the API.   
          # DetailedLIST -- This is the CHILD Component of Home Component, Which Describes the FORMAT of the Table Contents of the Home and How they are Going to be Shown in the App.

        # SIDEBAR -- It Contains the User Section and Options.
          # SidebarOptions -- This is the CHILD Component of Sidebar Component, Which Describes the FORMAT of the Options and How they are Going to be Shown in the App Sidebar.    

   # SCREENS -- It Holds the HERO and HOME Component.
        # MainScreen -- This Renders the Hero and Home Component Together.

   # UI -- It Contains all the Components Which are for USER INTERACTION
        # DateSelection[Not Fully Implemented] -- Gives User the Functionality to Search Within the Table Section
                        -- Using the DatePicker and Moment Library for Selecting Range
                        -- Using useState to Store the state of the Date Selected

        # LoadingSpinner -- It Shows the Loading Spinner When the User is in Loading State i.e Before the Data is Fetched on the Screen.

        # SearchForm[Not Fully Implemented] -- It Will give user the Functionality for Pagination i.e Filter the Required Number of Data Per Page.