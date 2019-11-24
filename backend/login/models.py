from django.db import models
from django.contrib.auth.models import User

class Classes(models.Model):
    courseId = models.IntegerField()
    courseName = models.TextField()
    meetingSchedule = models.TextField()
    username  =  models.ForeignKey(User, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return '%d' %(self.courseId)

class Students(models.Model):
    courseId = models.ForeignKey(Classes, on_delete=models.CASCADE)
    first_name = models.TextField()
    last_name = models.TextField()
    school_id = models.CharField(max_length = 200)
    attendence = models.CharField(max_length = 800)

    def __str__(self):
       return '%d' %(self.courseId)

