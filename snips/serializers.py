from rest_framework import serializers
from .models import Snip


class SnipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snip
        fields = '__all__'
