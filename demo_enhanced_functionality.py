#!/usr/bin/env python3
"""
Demo script showcasing the enhanced functionality of Convector Bank Statement Analyzer
"""

import pandas as pd
import os
from datetime import datetime
import sys
sys.path.append('.')  # Add current directory to path

# Import functions from app.py
from app import categorize_transactions, create_excel_report

def create_demo_transactions():
    """Create comprehensive demo transactions showcasing all categories"""
    return [
        # Deposits
        {
            'date': '01/01/2024',
            'description': 'Salary Deposit - January 2024',
            'amount': '5000.00',
            'balance': '5000.00',
            'type': 'Credit'
        },
        {
            'date': '01/15/2024',
            'description': 'Interest Earned on Savings',
            'amount': '25.50',
            'balance': '6230.50',
            'type': 'Credit'
        },
        
        # ATM Transactions
        {
            'date': '01/02/2024',
            'description': 'ATM Cash Deposit - Main Branch',
            'amount': '1000.00',
            'balance': '6000.00',
            'type': 'Credit'
        },
        {
            'date': '01/05/2024',
            'description': 'ATM Cash Withdrawal - Downtown',
            'amount': '500.00',
            'balance': '5500.00',
            'type': 'Debit'
        },
        
        # Utility Bills
        {
            'date': '01/03/2024',
            'description': 'Electricity Bill Payment - January',
            'amount': '150.00',
            'balance': '5350.00',
            'type': 'Debit'
        },
        {
            'date': '01/04/2024',
            'description': 'Mobile Recharge - Prepaid Plan',
            'amount': '75.00',
            'balance': '5275.00',
            'type': 'Debit'
        },
        {
            'date': '01/06/2024',
            'description': 'TV Subscription - Monthly Fee',
            'amount': '45.00',
            'balance': '5230.00',
            'type': 'Debit'
        },
        
        # Loan Repayments
        {
            'date': '01/07/2024',
            'description': 'Home Loan EMI - January Payment',
            'amount': '2000.00',
            'balance': '3230.00',
            'type': 'Debit'
        },
        {
            'date': '01/08/2024',
            'description': 'Car Loan EMI - January Payment',
            'amount': '800.00',
            'balance': '2430.00',
            'type': 'Debit'
        },
        
        # UPI Transfers
        {
            'date': '01/09/2024',
            'description': 'UPI Transfer to Friend - Dinner Payment',
            'amount': '120.00',
            'balance': '2310.00',
            'type': 'Debit'
        },
        {
            'date': '01/10/2024',
            'description': 'UPI Transfer from Client - Service Payment',
            'amount': '1500.00',
            'balance': '3810.00',
            'type': 'Credit'
        },
        
        # NEFT/RTGS
        {
            'date': '01/11/2024',
            'description': 'NEFT from Vendor - Product Sale',
            'amount': '3000.00',
            'balance': '6810.00',
            'type': 'Credit'
        },
        {
            'date': '01/12/2024',
            'description': 'RTGS to Supplier - Equipment Purchase',
            'amount': '5000.00',
            'balance': '1810.00',
            'type': 'Debit'
        },
        
        # Taxes
        {
            'date': '01/13/2024',
            'description': 'Income Tax Payment - Quarterly',
            'amount': '1200.00',
            'balance': '610.00',
            'type': 'Debit'
        },
        
        # Fees
        {
            'date': '01/14/2024',
            'description': 'Bank Service Charge - Monthly Fee',
            'amount': '25.00',
            'balance': '585.00',
            'type': 'Debit'
        },
        
        # Investments
        {
            'date': '01/16/2024',
            'description': 'Mutual Fund Investment - SIP Payment',
            'amount': '1000.00',
            'balance': '585.00',  # Assuming overdraft or credit line
            'type': 'Debit'
        },
        
        # Insurance
        {
            'date': '01/17/2024',
            'description': 'Life Insurance Premium - Annual Payment',
            'amount': '500.00',
            'balance': '85.00',
            'type': 'Debit'
        },
        
        # Refunds
        {
            'date': '01/18/2024',
            'description': 'Refund from Online Store - Returned Item',
            'amount': '85.00',
            'balance': '170.00',
            'type': 'Credit'
        },
        
        # Transfers
        {
            'date': '01/19/2024',
            'description': 'Transfer to Savings Account',
            'amount': '100.00',
            'balance': '70.00',
            'type': 'Debit'
        },
        
        # Other
        {
            'date': '01/20/2024',
            'description': 'Miscellaneous Expense - Office Supplies',
            'amount': '65.00',
            'balance': '5.00',
            'type': 'Debit'
        }
    ]

def demo_enhanced_functionality():
    """Demonstrate the enhanced functionality of Convector"""
    print("Convector Bank Statement Analyzer - Enhanced Functionality Demo")
    print("=" * 65)
    
    # Create demo transactions
    transactions = create_demo_transactions()
    print(f"✓ Created {len(transactions)} comprehensive demo transactions")
    
    # Categorize transactions
    categories = categorize_transactions(transactions)
    print("✓ Transactions categorized successfully")
    
    # Display category breakdown
    print("\n📊 Transaction Category Breakdown:")
    print("-" * 40)
    total_transactions = 0
    for category, cat_transactions in categories.items():
        count = len(cat_transactions)
        if count > 0:
            total_transactions += count
            print(f"  {category:20} : {count:2} transactions")
    
    print(f"\n📈 Total Transactions Processed: {total_transactions}")
    
    # Create Excel report
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    filename = f'convector_demo_report_{timestamp}.xlsx'
    
    try:
        create_excel_report(categories, filename)
        print(f"✓ Enhanced Excel report created: {filename}")
        
        # Verify file creation and content
        if os.path.exists(filename):
            excel_file = pd.ExcelFile(filename)
            sheets = excel_file.sheet_names
            print(f"✓ Excel file contains {len(sheets)} sheets")
            
            # Check for key sheets
            key_sheets = ['Enhanced Summary', 'Detailed Summary']
            for sheet in key_sheets:
                if sheet in sheets:
                    print(f"  ✓ {sheet} sheet found")
                else:
                    print(f"  ✗ {sheet} sheet missing")
            
            # Check for category sheets
            category_sheets = [cat for cat, trans in categories.items() if len(trans) > 0]
            print(f"✓ Category detail sheets created for {len(category_sheets)} categories")
            
            # Display file size
            file_size = os.path.getsize(filename)
            print(f"✓ Report file size: {file_size/1024:.1f} KB")
            
    except Exception as e:
        print(f"✗ Error creating Excel report: {e}")
        return False
    
    print("\n✨ Demo completed successfully!")
    print(f"📁 Report saved as: {filename}")
    print("\n📋 Key Features Demonstrated:")
    print("  • Enhanced transaction categorization (19 categories)")
    print("  • Comprehensive Excel report generation")
    print("  • Detailed financial metrics and summaries")
    print("  • Professional formatting and styling")
    print("  • Multiple visualization-ready data sheets")
    
    return True

if __name__ == "__main__":
    demo_enhanced_functionality()