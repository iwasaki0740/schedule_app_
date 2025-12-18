package com.example.schedule_app.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    // --------------------------
    // ユーザー登録 API
    // --------------------------
    @PostMapping("/user/register")
    public String register(@RequestBody UserForm form, HttpSession session) {

        if (form.getUser() == null || form.getUser().isEmpty()) {
            return "ユーザー名を入力してください";
        }

        // セッションに登録（本来DB）
        session.setAttribute("registeredUser", form.getUser());

        return "ユーザー登録完了: " + form.getUser();
    }

    // --------------------------
    // ログイン API
    // --------------------------
    @PostMapping("/login")
    public String login(@RequestBody UserForm form, HttpSession session) {

        String registered = (String) session.getAttribute("registeredUser");

        if (registered == null) {
            return "まずユーザー登録してください";
        }

        if (!registered.equals(form.getUser())) {
            return "ユーザー名が一致しません";
        }

        session.setAttribute("user", form.getUser());

        return "ログイン成功: " + form.getUser();
    }
}