from django.db import models
from users.models import CustomUser


class Snip(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(CustomUser,
                               on_delete=models.CASCADE,
                               to_field='username')
    language = models.CharField(max_length=10)
    updated_on = models.DateTimeField(auto_now=True)
    content = models.TextField()
    testcase = models.TextField(null=True, blank=True)
    isWeb = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title
