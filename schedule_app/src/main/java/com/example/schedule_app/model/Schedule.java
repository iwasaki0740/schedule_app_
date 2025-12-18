package com.example.schedule_app.model;

public class Schedule {
    private int id;
    private String user;
    private String title;
    private String date;

    public Schedule() {}
    
    public Schedule(int id, String user, String title, String date) {
        this.id = id;
        this.user = user;
        this.title = title;
        this.date = date;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getUser() { return user; }
    public void setUser(String user) { this.user = user; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
}