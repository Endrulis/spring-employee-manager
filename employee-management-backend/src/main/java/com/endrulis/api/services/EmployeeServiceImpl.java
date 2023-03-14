package com.endrulis.api.services;

import com.endrulis.api.dto.EmployeeDTO;
import com.endrulis.api.entities.EmployeeEntity;
import com.endrulis.api.repositories.EmployeeRepository;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl( EmployeeRepository employeeRepository ) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeDTO createEmployee( @NotNull @Valid EmployeeDTO employeeDTO ) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employeeDTO, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employeeDTO;
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<EmployeeEntity> employeeEntities
                = employeeRepository.findAll();

        List<EmployeeDTO> employees = employeeEntities
                .stream()
                .map(emp -> new EmployeeDTO(
                        emp.getId(),
                        emp.getFirstName(),
                        emp.getLastName(),
                        emp.getEmail()))
                .collect(Collectors.toList());
        return employees;
    }

    @Override
    public boolean deleteEmployee( @NotNull Long id ) {
        EmployeeEntity employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public EmployeeDTO getEmployeeById( @NotNull Long id ) {
        EmployeeEntity employeeEntity
                = employeeRepository.findById(id).get();
        EmployeeDTO employeeDTO = new EmployeeDTO();
        BeanUtils.copyProperties(employeeEntity, employeeDTO);
        return employeeDTO;
    }

    @Override
    public EmployeeDTO updateEmployee( @NotNull Long id, @NotNull @Valid EmployeeDTO employeeDTO ) {
        EmployeeEntity employeeEntity
                = employeeRepository.findById(id).get();
        employeeEntity.setEmail(employeeDTO.getEmail());
        employeeEntity.setFirstName(employeeDTO.getFirstName());
        employeeEntity.setLastName(employeeDTO.getLastName());
        employeeRepository.save(employeeEntity);
        return employeeDTO;
    }
}
