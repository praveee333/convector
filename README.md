# Convector - Bank Statement Analyzer

## Overview
Convector is a powerful bank statement analyzer that processes financial documents and generates comprehensive Excel reports with detailed transaction analysis. The application supports multiple file formats including PDF, images, documents, and Excel files.

**Enhanced Version**: This version includes significant improvements to transaction categorization, Excel reporting, and data visualization capabilities.

## Features
- Multi-format processing (PDF, PNG, JPG, GIF, DOC, DOCX, XLS, XLSX)
- Smart transaction categorization
- Financial insights and spending pattern analysis
- Comprehensive Excel reports with analytics dashboard
- Enhanced Excel export with charts and visualizations

## Enhanced Excel Export Features
The Excel export functionality has been significantly enhanced to include comprehensive analytics dashboards with the following features:

### Dashboard Sheets
1. **Enhanced Summary** - Comprehensive financial metrics including Total Credits, Total Deposits, ATM Deposits, ATM Withdrawals, Utility Bills, EMI/Loan Repayments, UPI Transfers, Taxes, NEFT/RTGS, and NET CASHFLOW
2. **Detailed Summary** - Complete breakdown of all transactions by category with counts and amounts
3. **Cashflow Summary** - Detailed breakdown of credit and debit amounts by category
4. **Monthly Average Balance** - Trend analysis of account balance over months
5. **Daily Average Balance** - Trend analysis of account balance over days
6. **Chart Data** - Aggregated data for charting purposes
7. **Category Details** - Detailed transaction lists for each category with enhanced formatting

### Charts and Visualizations
1. **Cashflow Summary Pie Chart** - Visualizes the distribution of credit and debit amounts by category
2. **Monthly Average Balance Line Chart** - Shows the trend of account balance over months
3. **Daily Average Balance Line Chart** - Shows the trend of account balance over days
4. **Credits vs Debits Bar Chart** - Comparative analysis of credits and debits by category

## Installation
1. Clone the repository
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the application:
   ```
   python app.py
   ```

## Usage
1. Navigate to the application in your web browser
2. Upload your bank statement file
3. Wait for the analysis to complete
4. Download the enhanced Excel report with analytics dashboard

## Technology Stack
- Flask (Web Framework)
- Python
- Pandas (Data Processing)
- OpenPyXL (Excel Generation)
- PyPDF2 (PDF Processing)
- Pillow (Image Processing)
- pytesseract (OCR)
- python-docx (DOCX Processing)

## File Structure
```
convector/
├── app.py              # Main application file
├── requirements.txt    # Python dependencies
├── README.md           # Project documentation
├── ENHANCEMENTS_SUMMARY.md  # Summary of Excel enhancements
├── FINAL_SUMMARY.md    # Comprehensive enhancement summary
├── templates/          # HTML templates
├── static/             # CSS, JavaScript, and other static files
├── uploads/            # Uploaded files directory
├── test_enhanced_excel.py  # Test script for enhanced functionality
├── demo_enhanced_functionality.py  # Demo script showcasing enhancements
└── test_files/         # Test files
```

## Testing
The application includes comprehensive test scripts to verify functionality:
- `test_enhanced_excel.py` - Tests the enhanced Excel functionality
- `demo_enhanced_functionality.py` - Creates a comprehensive demo showcasing all enhanced features

## License
This project is licensed under the MIT License.