from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import re

class BFHLView(APIView):
    def get(self, request):
        return Response({"operation_code": 1}, status=status.HTTP_200_OK)

    def post(self, request):
        try:
            data = request.data.get("data", [])
            if not isinstance(data, list):
                return Response({"is_success": False, "error": "Invalid input format"}, status=status.HTTP_400_BAD_REQUEST)

            numbers = [item for item in data if item.isdigit()]
            alphabets = [item for item in data if re.match(r'^[a-zA-Z]$', item)]
            highest_alphabet = sorted(alphabets, key=lambda x: x.upper(), reverse=True)[:1]

            response_data = {
                "is_success": True,
                "user_id": "john_doe_17091999",
                "email": "john@xyz.com",
                "roll_number": "ABCD123",
                "numbers": numbers,
                "alphabets": alphabets,
                "highest_alphabet": highest_alphabet if alphabets else []
            }
            return Response(response_data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"is_success": False, "error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
