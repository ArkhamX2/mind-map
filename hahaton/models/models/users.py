from django.contrib.auth.models import AbstractUser
from django.db import models
class Users(AbstractUser):
    avatar = models.ImageField(upload_to='users/', null=True, blank=True)
    description = models.CharField(max_length=511, null=True, blank=True)

    class Meta:
        db_table = "users"
        verbose_name = "User"
        verbose_name_plural = "Users"

        
    def __str__(self):
        return f"id: {self.pk}, username: {self.username}, avatar: {self.avatar}, description: {self.description}"