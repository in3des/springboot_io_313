package com.example.springboot_io_313.controllers;

import com.example.springboot_io_313.entity.Person;
import com.example.springboot_io_313.service.PeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.NoSuchElementException;


@Controller
@RequestMapping("/")
public class PeopleController {

    private final PeopleService peopleService;

    @Autowired
    public PeopleController(PeopleService peopleService) {
        this.peopleService = peopleService;
    }

    @GetMapping("/admin")
//    @ResponseBody
    public String showIndexPage(Model model, Authentication authentication) {
        model.addAttribute("people", peopleService.index());
        model.addAttribute("personA", peopleService.findPersonByEmail(((Person) authentication.getPrincipal()).getEmail()));
        model.addAttribute("person2", new Person());
        return "people/index";
//        return peopleService.index();
    }

//    =================================== REST API

    @GetMapping("api/users")
    @ResponseBody
    public List<Person> apiGetPeopleList() {
        return peopleService.index();
    }

    @GetMapping("api/findlogged")
    @ResponseBody
    public Person apiFindLoggedUser(Authentication authentication) {
        return peopleService.findPersonByEmail(((Person) authentication.getPrincipal()).getEmail());
    }

    @GetMapping("api/newperson")
    @ResponseBody
    public Person apiNewPerson() {
        return new Person();
    }

    @GetMapping("/api/users/{id}")
    @ResponseBody
    public ResponseEntity<Person> get(@PathVariable Long id) {
        try {
            Person person = peopleService.show(id);
            return new ResponseEntity<>(person, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/api/users")
    @ResponseBody
    public void apiCreatePerson(@RequestBody Person person) {
        peopleService.save(person);
    }

    @PutMapping("/api/users/{id}")
    @ResponseBody
    public ResponseEntity<?> apiUpdatePerson(@RequestBody Person person, @PathVariable Long id) {
        try {
            peopleService.update(person, id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/api/users/{id}")
    @ResponseBody
    public void apiDeletePerson(@PathVariable Long id) {
        peopleService.delete(id);
    }


//    =================================== REST API


    @GetMapping("/user")
    public String showOneUserPage(Model model, Authentication authentication) {
        model.addAttribute("person", peopleService.findPersonByEmail(((Person) authentication.getPrincipal()).getEmail()));
        return "people/show";
    }

//    @GetMapping("/admin/new")
//    public String showNewPersonPage(@ModelAttribute("person") Person person) {
//        return "people/new";
//    }

    @PostMapping("/admin")
    public String createPerson(@ModelAttribute("person") @Valid Person person, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return "people/index";
//            return "people/new";
        }

        peopleService.save(person);
        return "redirect:/admin";
    }



//    @GetMapping("/admin/{id}/edit")
//    public String showEditPersonPage(@PathVariable("id") Long id, Model model) {
//        model.addAttribute("person", peopleService.show(id));
//        return "people/edit";
//    }

    @PostMapping("admin/{id}")
    public String UpdatePerson(@ModelAttribute("person") @Valid Person person, BindingResult bindingResult,
                               @PathVariable("id") Long id) {

//        System.out.println("------------------------------");
//
//        System.out.println(person.getRoles());
//
//        System.out.println("user_id=" + id + " if user_role --> " + person.getRoles().toString().contains("ROLE_USER"));
//        System.out.println("user_id=" + id + " if admin_role --> " + person.getRoles().toString().contains("ROLE_ADMIN"));
//
//        System.out.println("------------------------------");
//
//        System.out.println("admin >>> " + person.checkAdmin());
//        System.out.println("user >>> " + person.checkUser());
//
//        System.out.println("------------------------------");



        if (bindingResult.hasErrors()) {
            return "redirect:/admin/{id}";
//            return "people/edit";
        }

        peopleService.update(person, id);
        return "redirect:/admin";
    }


    @PostMapping("/admin/delete/{id}")
    public String deletePerson(@PathVariable("id") Long id, Model model) {
        peopleService.delete(id);
        return "redirect:/admin";
    }


    @RequestMapping(value = "login", method = RequestMethod.GET)
    public String loginPage() {
        return "login";
    }

}



//    =================================================================
////    @GetMapping("/admin/{id}/edit")
//    @GetMapping("/admin/edit")
//    @ResponseBody                 // json working
////    public Person showEditPersonPage(Long id) {
////        return peopleService.show(id);
////    }
//================================================================



