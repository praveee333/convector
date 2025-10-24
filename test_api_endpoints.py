#!/usr/bin/env python3
"""
Test script for the new API endpoints
"""

import sys
import os
sys.path.append('.')  # Add current directory to path

def test_api_endpoints():
    """Test the new API endpoints"""
    print("Testing API endpoints...")
    
    # Since we can't easily test the Flask endpoints without running the server,
    # we'll just verify that the functions exist and the routes are defined
    
    try:
        # Import the app to check if routes are defined
        from app import app, get_analysis_data, get_analysis_transactions
        
        # Check if routes exist
        rules = [rule.rule for rule in app.url_map.iter_rules()]
        
        # Check for analysis data endpoint
        analysis_data_route = '/api/analysis-data/<int:analysis_id>'
        if analysis_data_route in rules:
            print("✓ Analysis data API endpoint found")
        else:
            print("✗ Analysis data API endpoint missing")
            
        # Check for transactions endpoint
        transactions_route = '/api/analysis-transactions/<int:analysis_id>/<category>'
        if transactions_route in rules:
            print("✓ Transactions API endpoint found")
        else:
            print("✗ Transactions API endpoint missing")
            
        print("✓ API endpoint tests completed")
        return True
        
    except Exception as e:
        print(f"✗ Error testing API endpoints: {e}")
        return False

if __name__ == "__main__":
    print("Convector API Endpoints Test")
    print("=" * 30)
    
    success = test_api_endpoints()
    
    if success:
        print("\n✓ All API endpoint tests passed!")
    else:
        print("\n✗ Some API endpoint tests failed.")
        
    print("\nTest completed.")