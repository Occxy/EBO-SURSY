<?php
# src/Entity/Ectoparasites.php

namespace Tuto\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Ectoparasites
 *
 * @ORM\Table(name="ectoparasites", indexes={@ORM\Index(name="NIdent", columns={"NIdent"})})
 * @ORM\Entity
 */
class Ectoparasites
{
    /**
     * @var string
     *
     * @ORM\Column(name="IDParasite", type="string", length=255, nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idparasite;

    /**
     * @var boolean
     *
     * @ORM\Column(name="AnimalIdent", type="boolean", nullable=true)
     */
    private $animalident;

    /**
     * @var string
     *
     * @ORM\Column(name="NIdent", type="string", length=255, nullable=true)
     */
    private $nident;



    /**
     * Get idparasite
     *
     * @return string
     */
    public function getIdparasite()
    {
        return $this->idparasite;
    }

    /**
     * Set animalident
     *
     * @param boolean $animalident
     *
     * @return Ectoparasites
     */
    public function setAnimalident($animalident)
    {
        $this->animalident = $animalident;

        return $this;
    }

    /**
     * Get animalident
     *
     * @return boolean
     */
    public function getAnimalident()
    {
        return $this->animalident;
    }

    /**
     * Set nident
     *
     * @param string $nident
     *
     * @return Ectoparasites
     */
    public function setNident($nident)
    {
        $this->nident = $nident;

        return $this;
    }

    /**
     * Get nident
     *
     * @return string
     */
    public function getNident()
    {
        return $this->nident;
    }
}
