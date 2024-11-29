<?php
# src/Entity/Species.php

namespace Tuto\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Species
 *
 * @ORM\Table(name="species", uniqueConstraints={@ORM\UniqueConstraint(name="SpCode", columns={"SpCode"})})
 * @ORM\Entity
 */
class Species
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="SpCode", type="string", length=255, nullable=false)
     */
    private $spcode;

    /**
     * @var string
     *
     * @ORM\Column(name="Species", type="string", length=255, nullable=true)
     */
    private $species;

    /**
     * @var string
     *
     * @ORM\Column(name="Genus", type="string", length=255, nullable=true)
     */
    private $genus;

    /**
     * @var string
     *
     * @ORM\Column(name="Family", type="string", length=255, nullable=true)
     */
    private $family;

    /**
     * @var string
     *
     * @ORM\Column(name="Order", type="string", length=255, nullable=true)
     */
    private $order;

    /**
     * @var string
     *
     * @ORM\Column(name="UICNStatus", type="string", length=255, nullable=true)
     */
    private $uicnstatus;

    /**
     * @var string
     *
     * @ORM\Column(name="Diet", type="string", length=255, nullable=true)
     */
    private $diet;

    /**
     * @var string
     *
     * @ORM\Column(name="EnglishName", type="string", length=255, nullable=true)
     */
    private $englishname;

    /**
     * @var string
     *
     * @ORM\Column(name="FrenchName", type="string", length=255, nullable=true)
     */
    private $frenchname;

    /**
     * @var boolean
     *
     * @ORM\Column(name="ViandeDeBrousse", type="boolean", nullable=true)
     */
    private $viandedebrousse;



    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set spcode
     *
     * @param string $spcode
     *
     * @return Species
     */
    public function setSpcode($spcode)
    {
        $this->spcode = $spcode;

        return $this;
    }

    /**
     * Get spcode
     *
     * @return string
     */
    public function getSpcode()
    {
        return $this->spcode;
    }

    /**
     * Set species
     *
     * @param string $species
     *
     * @return Species
     */
    public function setSpecies($species)
    {
        $this->species = $species;

        return $this;
    }

    /**
     * Get species
     *
     * @return string
     */
    public function getSpecies()
    {
        return $this->species;
    }

    /**
     * Set genus
     *
     * @param string $genus
     *
     * @return Species
     */
    public function setGenus($genus)
    {
        $this->genus = $genus;

        return $this;
    }

    /**
     * Get genus
     *
     * @return string
     */
    public function getGenus()
    {
        return $this->genus;
    }

    /**
     * Set family
     *
     * @param string $family
     *
     * @return Species
     */
    public function setFamily($family)
    {
        $this->family = $family;

        return $this;
    }

    /**
     * Get family
     *
     * @return string
     */
    public function getFamily()
    {
        return $this->family;
    }

    /**
     * Set order
     *
     * @param string $order
     *
     * @return Species
     */
    public function setOrder($order)
    {
        $this->order = $order;

        return $this;
    }

    /**
     * Get order
     *
     * @return string
     */
    public function getOrder()
    {
        return $this->order;
    }

    /**
     * Set uicnstatus
     *
     * @param string $uicnstatus
     *
     * @return Species
     */
    public function setUicnstatus($uicnstatus)
    {
        $this->uicnstatus = $uicnstatus;

        return $this;
    }

    /**
     * Get uicnstatus
     *
     * @return string
     */
    public function getUicnstatus()
    {
        return $this->uicnstatus;
    }

    /**
     * Set diet
     *
     * @param string $diet
     *
     * @return Species
     */
    public function setDiet($diet)
    {
        $this->diet = $diet;

        return $this;
    }

    /**
     * Get diet
     *
     * @return string
     */
    public function getDiet()
    {
        return $this->diet;
    }

    /**
     * Set englishname
     *
     * @param string $englishname
     *
     * @return Species
     */
    public function setEnglishname($englishname)
    {
        $this->englishname = $englishname;

        return $this;
    }

    /**
     * Get englishname
     *
     * @return string
     */
    public function getEnglishname()
    {
        return $this->englishname;
    }

    /**
     * Set frenchname
     *
     * @param string $frenchname
     *
     * @return Species
     */
    public function setFrenchname($frenchname)
    {
        $this->frenchname = $frenchname;

        return $this;
    }

    /**
     * Get frenchname
     *
     * @return string
     */
    public function getFrenchname()
    {
        return $this->frenchname;
    }

    /**
     * Set viandedebrousse
     *
     * @param boolean $viandedebrousse
     *
     * @return Species
     */
    public function setViandedebrousse($viandedebrousse)
    {
        $this->viandedebrousse = $viandedebrousse;

        return $this;
    }

    /**
     * Get viandedebrousse
     *
     * @return boolean
     */
    public function getViandedebrousse()
    {
        return $this->viandedebrousse;
    }
}
