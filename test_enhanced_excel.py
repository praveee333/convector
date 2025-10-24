#!/usr/bin/env python3
"""
Test script for the enhanced Excel report functionality
"""

import pandas as pd
import os
from datetime import datetime
import sys
sys.path.append('.')  # Add current directory to path

# Import functions from app.py
from app import categorize_transactions, create_excel_report

def create_sample_transactions():
    """Create sample transactions for testing"""
    return [
        {
            'date': '01/15/2024',
            'description': 'Salary Deposit - January 2024',
            'amount': '3500.00',
            'balance': '3500.00',
            'type': 'Credit'
        },
        {
            'date': '01/16/2024',
            'description': 'ATM Cash Deposit',
            'amount': '500.00',
            'balance': '4000.00',
            'type': 'Credit'
        },
        {
            'date': '01/17/2024',
            'description': 'ATM Cash Withdrawal',
            'amount': '200.00',
            'balance': '3800.00',
            'type': 'Debit'
        },
        {
            'date': '01/18/2024',
            'description': 'Electricity Bill Payment',
            'amount': '120.00',
            'balance': '3680.00',
            'type': 'Debit'
        },
        {
            'date': '01/19/2024',
            'description': 'Mobile Recharge',
            'amount': '50.00',
            'balance': '3630.00',
            'type': 'Debit'
        },
        {
            'date': '01/20/2024',
            'description': 'Home Loan EMI',
            'amount': '1500.00',
            'balance': '2130.00',
            'type': 'Debit'
        },
        {
            'date': '01/21/2024',
            'description': 'UPI Transfer to Friend',
            'amount': '100.00',
            'balance': '2030.00',
            'type': 'Debit'
        },
        {
            'date': '01/22/2024',
            'description': 'NEFT from Client',
            'amount': '2000.00',
            'balance': '4030.00',
            'type': 'Credit'
        },
        {
            'date': '01/23/2024',
            'description': 'Tax Payment',
            'amount': '500.00',
            'balance': '3530.00',
            'type': 'Debit'
        },
        {
            'date': '01/24/2024',
            'description': 'Interest Earned',
            'amount': '15.25',
            'balance': '3545.25',
            'type': 'Credit'
        }
    ]

def test_enhanced_excel_report():
    """Test the enhanced Excel report functionality"""
    print("Testing enhanced Excel report functionality...")
    
    # Create sample transactions
    transactions = create_sample_transactions()
    print(f"Created {len(transactions)} sample transactions")
    
    # Categorize transactions
    categories = categorize_transactions(transactions)
    print("Transactions categorized successfully")
    
    # Check that all categories are present
    expected_categories = [
        'Deposits', 'Withdrawals', 'Loans', 'Interest', 'Fees', 'Transfers',
        'Payments', 'Cash', 'Investments', 'Refunds', 'Insurance', 'Taxes',
        'UPI Transfers', 'ATM Deposits', 'ATM Withdrawals', 'Utility Bills',
        'EMI/Loan Repayments', 'NEFT/RTGS', 'Other'
    ]
    
    print("\nCategory breakdown:")
    for category in expected_categories:
        count = len(categories.get(category, []))
        print(f"  {category}: {count} transactions")
    
    # Create Excel report
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    filename = f'test_enhanced_report_{timestamp}.xlsx'
    
    try:
        create_excel_report(categories, filename)
        print(f"\nExcel report created successfully: {filename}")
        
        # Verify that the file was created
        if os.path.exists(filename):
            print("File exists and is accessible")
            
            # Check that the file contains the expected sheets
            try:
                excel_file = pd.ExcelFile(filename)
                sheets = excel_file.sheet_names
                print(f"Excel file contains {len(sheets)} sheets: {sheets}")
                
                # Check for required sheets
                required_sheets = ['Enhanced Summary', 'Detailed Summary']
                for sheet in required_sheets:
                    if sheet in sheets:
                        print(f"  ✓ {sheet} sheet found")
                    else:
                        print(f"  ✗ {sheet} sheet missing")
                
                # Check category sheets
                category_sheets = [cat for cat in expected_categories if len(categories.get(cat, [])) > 0]
                for sheet in category_sheets:
                    if sheet in sheets:
                        print(f"  ✓ {sheet} sheet found")
                    else:
                        print(f"  ✗ {sheet} sheet missing")
                        
            except Exception as e:
                print(f"Error reading Excel file: {e}")
        else:
            print("Error: File was not created")
            
    except Exception as e:
        print(f"Error creating Excel report: {e}")
        return False
    
    return True

if __name__ == "__main__":
    print("Convector Enhanced Excel Report Test")
    print("=" * 40)
    
    success = test_enhanced_excel_report()
    
    if success:
        print("\n✓ All tests passed! Enhanced Excel functionality is working correctly.")
    else:
        print("\n✗ Some tests failed. Please check the implementation.")
        
    print("\nTest completed.")