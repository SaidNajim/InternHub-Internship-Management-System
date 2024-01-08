package com.internhub.interhub.model;

import jakarta.persistence.*;
import java.io.Serializable;

class AcquerirId implements Serializable {
    private Competence competence;
    private TypeStage typeStage;
}

@Entity
@IdClass(AcquerirId.class)
public class Acquerir implements Serializable {
    @Id
    @ManyToOne
    @JoinColumn(name = "code_competence", nullable = false)
    private Competence competence;

    @Id
    @ManyToOne
    @JoinColumn(name = "code_type", nullable = false)
    private TypeStage typeStage;

    @Column(name = "nv_exige", nullable = false)
    private int nvExige;

    public Acquerir() {
    }

    public Acquerir(Competence competence, TypeStage typeStage, int nvExige) {
        this.competence = competence;
        this.typeStage = typeStage;
        this.nvExige = nvExige;
    }

    // Getters & Setters

    public Competence getCompetence() {
        return competence;
    }

    public void setCompetence(Competence competence) {
        this.competence = competence;
    }

    public TypeStage getTypeStage() {
        return typeStage;
    }

    public void setTypeStage(TypeStage typeStage) {
        this.typeStage = typeStage;
    }

    public int getNvExige() {
        return nvExige;
    }

    public void setNvExige(int nvExige) {
        this.nvExige = nvExige;
    }
}