from rest_framework import serializers

class BFHLSerializer(serializers.Serializer):
    data = serializers.ListField(child=serializers.CharField())
