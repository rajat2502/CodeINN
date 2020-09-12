from django.contrib import admin
from .models import Snip


class SnipAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'created_on')
    list_filter = (
        "created_on",
        "slug",
    )
    search_fields = ['title', 'content', 'slug']
    prepopulated_fields = {'slug': ('title', )}


admin.site.register(Snip, SnipAdmin)
