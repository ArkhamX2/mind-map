from models.models.users import Users
from django.contrib import admin
@admin.register(Users)
class UserAdmin(admin.ModelAdmin):
    pass