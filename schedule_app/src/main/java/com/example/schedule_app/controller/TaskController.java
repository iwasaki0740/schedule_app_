package com.example.schedule_app.controller;

import com.example.schedule_app.sqlite.Database;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.*;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @GetMapping
    public List<Map<String, Object>> getAll() throws Exception {
        List<Map<String, Object>> list = new ArrayList<>();

        try (Connection conn = Database.getConnection();
             Statement st = conn.createStatement();
             ResultSet rs = st.executeQuery("SELECT * FROM tasks")) {

            while (rs.next()) {
                Map<String, Object> m = new HashMap<>();
                m.put("id", rs.getInt("id"));
                m.put("title", rs.getString("title"));
                m.put("date", rs.getString("date"));
                list.add(m);
            }
        }

        return list;
    }

    @PostMapping
    public String addTask(@RequestParam String title,
                          @RequestParam(required = false) String date) throws Exception {

        try (Connection conn = Database.getConnection();
             PreparedStatement ps = conn.prepareStatement(
                     "INSERT INTO tasks(title,date) VALUES(?,?)")) {

            ps.setString(1, title);
            ps.setString(2, date);
            ps.executeUpdate();
        }

        return "OK";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) throws Exception {
        try (Connection conn = Database.getConnection();
             PreparedStatement ps = conn.prepareStatement(
                     "DELETE FROM tasks WHERE id=?")) {

            ps.setInt(1, id);
            ps.executeUpdate();
        }
        return "OK";
    }
}