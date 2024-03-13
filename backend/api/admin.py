from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


def delete_selected_users(modeladmin, request, queryset):
    for user in queryset:
        user.delete()


delete_selected_users.short_description = "Delete selected Users"


class UserAdmin(BaseUserAdmin):
    actions = [delete_selected_users]


# 先注销原来的User模型注册
admin.site.unregister(User)
# 使用扩展后的UserAdmin重新注册User模型
admin.site.register(User, UserAdmin)
