from django.db import models
from django.contrib.auth.models import User

class Classes(models.Model):
    courseId = models.IntegerField()
    courseName = models.TextField()
    meetingSchedule = models.TextField()
    username  =  models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return '%d %s' %(self.courseId, username)

class Students(models.Model):
    courseId = models.ForeignKey(Classes, on_delete=models.CASCADE)
    studentName  = models.TextField()
    school_id = models.CharField(max_length = 200)
    attendence = models.CharField(max_length = 800)
    studentPicture = models.FileField(upload_to = 'student_pic',blank=False, null=False, default=1)

    def __str__(self):
        return '%s' %(self.courseId)
        
