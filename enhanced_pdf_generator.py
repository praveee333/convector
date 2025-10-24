#!/usr/bin/env python3
"""
Enhanced PDF Generator for Convector Bank Statement Analyzer
Creates professional PDF bank statements with accurate transaction data
"""

import pandas as pd
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from datetime import datetime
import os

def create_professional_bank_statement(categories, filename="professional_bank_statement.pdf", account_info=None):
    """
    Create a professional bank statement PDF from categorized transactions
    
    Args:
        categories (dict): Dictionary of categorized transactions
        filename (str): Output PDF filename
        account_info (dict): Account information (account number, name, etc.)
    
    Returns:
        str: Path to the generated PDF file
    """
    # Create a PDF document
    doc = SimpleDocTemplate(filename, pagesize=A4)
    styles = getSampleStyleSheet()
    story = []
    
    # Default account info if not provided
    if account_info is None:
        account_info = {
            "bank_name": "E-Faws Tech Services Pvt Ltd",
            "account_number": "**** **** **** 0000",
            "account_holder": "Client Account",
            "statement_period": f"{datetime.now().strftime('%B %Y')}",
            "opening_balance": "$0.00",
            "closing_balance": "$0.00"
        }
    
    # Add bank header
    header_style = ParagraphStyle(
        'BankHeader',
        parent=styles['Heading1'],
        fontSize=20,
        spaceAfter=6,
        alignment=TA_CENTER,
        textColor=colors.darkblue
    )
    
    header = Paragraph(account_info["bank_name"], header_style)
    story.append(header)
    
    subheader_style = ParagraphStyle(
        'BankSubHeader',
        parent=styles['Normal'],
        fontSize=14,
        spaceAfter=20,
        alignment=TA_CENTER,
        textColor=colors.gray
    )
    
    subheader = Paragraph("Bank Statement", subheader_style)
    story.append(subheader)
    
    # Add account information
    account_style = ParagraphStyle(
        'AccountInfo',
        parent=styles['Normal'],
        fontSize=10,
        spaceAfter=15,
        alignment=TA_LEFT
    )
    
    # Create account info table
    account_data = [
        ["Account Number:", account_info["account_number"]],
        ["Account Holder:", account_info["account_holder"]],
        ["Statement Period:", account_info["statement_period"]],
        ["Opening Balance:", account_info["opening_balance"]],
        ["Closing Balance:", account_info["closing_balance"]],
        ["Generated On:", datetime.now().strftime('%m/%d/%Y %H:%M:%S')]
    ]
    
    account_table = Table(account_data, colWidths=[1.8*inch, 2.5*inch])
    account_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, -1), 'LEFT'),
        ('ALIGN', (1, 0), (1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('GRID', (0, 0), (-1, -1), 0, colors.white),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
    ]))
    
    story.append(account_table)
    story.append(Spacer(1, 20))
    
    # Add summary section
    story.append(Paragraph("Transaction Summary", styles['Heading2']))
    story.append(Spacer(1, 12))
    
    # Calculate summary data
    summary_data = [['Category', 'Count', 'Credits', 'Debits', 'Net']]
    total_credit = 0
    total_debit = 0
    total_count = 0
    
    for category, transactions in categories.items():
        if transactions:  # Only show categories with transactions
            count = len(transactions)
            credit_amount = sum(float(t['amount'].replace(',', '')) for t in transactions if t['type'] == 'Credit')
            debit_amount = sum(float(t['amount'].replace(',', '')) for t in transactions if t['type'] == 'Debit')
            net_amount = credit_amount - debit_amount
            
            total_credit += credit_amount
            total_debit += debit_amount
            total_count += count
            
            summary_data.append([
                category,
                str(count),
                f"${credit_amount:,.2f}",
                f"(${debit_amount:,.2f})",
                f"${net_amount:,.2f}"
            ])
    
    # Add totals row
    summary_data.append([
        'TOTAL',
        str(total_count),
        f"${total_credit:,.2f}",
        f"(${total_debit:,.2f})",
        f"${total_credit - total_debit:,.2f}"
    ])
    
    # Create summary table
    summary_table = Table(summary_data, colWidths=[1.5*inch, 0.8*inch, 1.2*inch, 1.2*inch, 1.2*inch])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.darkblue),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, 1), (-1, -2), colors.lightgrey),  # Data rows
        ('BACKGROUND', (0, -1), (-1, -1), colors.darkblue),   # Total row
        ('TEXTCOLOR', (0, -1), (-1, -1), colors.whitesmoke),  # Total row text
        ('FONTNAME', (0, -1), (-1, -1), 'Helvetica-Bold'),    # Total row font
        ('GRID', (0, 0), (-1, -1), 1, colors.black),
        ('FONTNAME', (0, 1), (-1, -2), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -2), 9),
        ('ALIGN', (1, 1), (1, -1), 'CENTER'),   # Count column
        ('ALIGN', (2, 1), (2, -1), 'RIGHT'),    # Credits column
        ('ALIGN', (3, 1), (3, -1), 'RIGHT'),    # Debits column
        ('ALIGN', (4, 1), (4, -1), 'RIGHT'),    # Net column
    ]))
    
    story.append(summary_table)
    story.append(Spacer(1, 30))
    
    # Add detailed transactions for each category
    for category, transactions in categories.items():
        if transactions:  # Only show categories with transactions
            story.append(Paragraph(f"{category} Transactions", styles['Heading2']))
            story.append(Spacer(1, 12))
            
            # Prepare transaction data
            transaction_data = [['Date', 'Description', 'Type', 'Amount', 'Balance']]
            
            # Sort transactions by date
            sorted_transactions = sorted(transactions, key=lambda x: datetime.strptime(x['date'], '%m/%d/%Y'))
            
            for transaction in sorted_transactions:
                # Format amount based on transaction type
                amount = float(transaction['amount'].replace(',', ''))
                formatted_amount = f"${amount:,.2f}" if transaction['type'] == 'Credit' else f"(${amount:,.2f})"
                
                # Add balance if available, otherwise show N/A
                balance = transaction.get('balance', 'N/A')
                if isinstance(balance, str) and balance.startswith('$'):
                    formatted_balance = balance
                elif balance != 'N/A':
                    try:
                        formatted_balance = f"${float(str(balance).replace(',', '').replace('$', '')):,.2f}"
                    except:
                        formatted_balance = 'N/A'
                else:
                    formatted_balance = 'N/A'
                
                transaction_data.append([
                    transaction['date'],
                    transaction['description'][:30] + "..." if len(transaction['description']) > 30 else transaction['description'],
                    transaction['type'],
                    formatted_amount,
                    formatted_balance
                ])
            
            # Create transaction table
            transaction_table = Table(transaction_data, colWidths=[0.8*inch, 2.2*inch, 0.6*inch, 1*inch, 1*inch])
            transaction_table.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, 0), colors.darkblue),
                ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
                ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
                ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                ('FONTSIZE', (0, 0), (-1, 0), 9),
                ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
                ('BACKGROUND', (0, 1), (-1, -1), colors.white),
                ('GRID', (0, 0), (-1, -1), 1, colors.black),
                ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
                ('FONTSIZE', (0, 1), (-1, -1), 8),
                ('ALIGN', (3, 1), (3, -1), 'RIGHT'),  # Amount column
                ('ALIGN', (4, 1), (4, -1), 'RIGHT'),  # Balance column
                ('VALIGN', (0, 0), (-1, -1), 'TOP'),
            ]))
            
            story.append(transaction_table)
            story.append(Spacer(1, 20))
    
    # Add footer
    footer_style = ParagraphStyle(
        'CustomFooter',
        parent=styles['Normal'],
        fontSize=8,
        spaceBefore=30,
        alignment=TA_CENTER,
        textColor=colors.gray
    )
    
    footer = Paragraph(
        f"Confidential - Generated by Convector Bank Statement Analyzer | "
        f"{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
        footer_style
    )
    story.append(footer)
    
    # Build PDF
    doc.build(story)
    
    return os.path.abspath(filename)

def integrate_with_convector():
    """
    Example of how to integrate this with the Convector application
    This function shows how to call the PDF generator from the upload route
    """
    # This would be added to the upload route in app.py after the Excel report is created:
    """
    # Create Excel report
    excel_filename = f"report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.xlsx"
    excel_filepath = os.path.join(app.config['UPLOAD_FOLDER'], excel_filename)
    create_excel_report(categories, excel_filepath)
    
    # Create PDF report
    pdf_filename = f"report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"
    pdf_filepath = os.path.join(app.config['UPLOAD_FOLDER'], pdf_filename)
    
    # Account info can be extracted from the document or provided by user
    account_info = {
        "bank_name": "E-Faws Tech Services Pvt Ltd",
        "account_number": "Extracted from document or default",
        "account_holder": "Client Name",
        "statement_period": "Extracted period or current month",
        "opening_balance": "$0.00",  # Would be extracted from document
        "closing_balance": "$0.00"   # Would be calculated or extracted
    }
    
    create_professional_bank_statement(categories, pdf_filepath, account_info)
    
    # Return both files or provide option to download PDF
    # return send_file(pdf_filepath, as_attachment=True)
    """
    pass

if __name__ == "__main__":
    # Example usage with sample data
    sample_categories = {
        'Deposits': [
            {
                'date': '01/15/2024',
                'description': 'Salary Deposit - January 2024',
                'amount': '3500.00',
                'balance': '3500.00',
                'type': 'Credit'
            },
            {
                'date': '01/20/2024',
                'description': 'Interest Earned',
                'amount': '15.25',
                'balance': '3654.95',
                'type': 'Credit'
            }
        ],
        'Payments': [
            {
                'date': '01/16/2024',
                'description': 'Grocery Store - Fresh Market',
                'amount': '85.30',
                'balance': '3414.70',
                'type': 'Debit'
            },
            {
                'date': '01/18/2024',
                'description': 'Electricity Bill - January',
                'amount': '120.00',
                'balance': '3294.70',
                'type': 'Debit'
            }
        ],
        'Transfers': [
            {
                'date': '01/25/2024',
                'description': 'Online Transfer to Savings',
                'amount': '500.00',
                'balance': '2609.95',
                'type': 'Debit'
            }
        ]
    }
    
    account_info = {
        "bank_name": "E-Faws Tech Services Pvt Ltd",
        "account_number": "**** **** **** 1234",
        "account_holder": "John Doe",
        "statement_period": "January 2024",
        "opening_balance": "$1,500.00",
        "closing_balance": "$2,639.95"
    }
    
    pdf_path = create_professional_bank_statement(sample_categories, "integrated_bank_statement.pdf", account_info)
    print(f"Professional bank statement PDF generated successfully: {pdf_path}")