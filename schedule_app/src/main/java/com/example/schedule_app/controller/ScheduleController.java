package com.example.schedule_app.controller;

import com.example.schedule_app.model.Schedule;
import com.example.schedule_app.repository.ScheduleRepository;

import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class ScheduleController {

    private final ScheduleRepository repo;

    public ScheduleController(ScheduleRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/schedules")
    public String addSchedule(@RequestBody Schedule schedule, HttpSession session) {
        String user = (String) session.getAttribute("user");
        if(user == null) return "ログインしてください";
        schedule.setUser(user);
        repo.save(schedule);
        return "OK";
    }

    @GetMapping("/schedules")
    public List<Schedule> getSchedules(HttpSession session) {
        String user = (String) session.getAttribute("user");
        if(user == null) return List.of();
        return repo.findAll().stream()
                .filter(s -> s.getUser().equals(user))
                .collect(Collectors.toList());
    }

    @DeleteMapping("/schedules")
    public String deleteAll(HttpSession session) {
        String user = (String) session.getAttribute("user");
        if(user == null) return "ログインしてください";
        repo.deleteAll();
        return "削除完了";
    }
}
