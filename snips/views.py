from rest_framework import generics
from .models import Snip
from .serializers import SnipSerializer


class SnipDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Snip.objects.all().order_by('-created_on')
    serializer_class = SnipSerializer
    lookup_field = 'slug'


class SnipList(generics.ListCreateAPIView):
    queryset = Snip.objects.all().order_by('-created_on')
    serializer_class = SnipSerializer


class SnipListByUser(generics.ListAPIView):
    model = Snip
    serializer_class = SnipSerializer
    lookup_field = 'author'

    def get_queryset(self):
        return Snip.objects.filter(
            author=self.kwargs['username']).order_by('-created_on')
