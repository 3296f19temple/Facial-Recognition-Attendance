from django.db import models
from django.contrib.auth.models import User

class Classes(models.Model):
    courseId = models.CharField(max_length = 10)
    courseName = models.TextField()
    meetingSchedule = models.TextField()

    username  =  models.ForeignKey(User, on_delete=models.CASCADE)


    
    def __str__(self):
        return self.courseId



class Students(models.Model):
    courseId = models.CharField(max_length = 10)
    course = models.ForeignKey(Classes, on_delete=models.CASCADE,  default=1)
    studentName  = models.TextField()
    school_id = models.CharField(max_length = 300)
    attendence = models.CharField(max_length = 800)
    studentPicture = models.ImageField(upload_to = 'students/',blank=False, null=False, default=1)

   


    def __str__(self):
        return self.courseId
        