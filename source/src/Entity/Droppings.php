<?php
# src/Entity/Droppings.php

namespace Tuto\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Droppings
 *
 * @ORM\Table(name="droppings", indexes={@ORM\Index(name="NIdent", columns={"NIdent"})})
 * @ORM\Entity
 */
class Droppings
{
    /**
     * @var string
     *
     * @ORM\Column(name="DroppingID", type="string", length=255, nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $droppingid;

    /**
     * @var string
     *
     * @ORM\Column(name="ModeCollecte", type="string", length=255, nullable=true)
     */
    private $modecollecte;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="DateOfCollection", type="datetime", nullable=true)
     */
    private $dateofcollection;

    /**
     * @var string
     *
     * @ORM\Column(name="SiteName", type="string", length=255, nullable=true)
     */
    private $sitename;

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
     * Get droppingid
     *
     * @return string
     */
    public function getDroppingid()
    {
        return $this->droppingid;
    }

    /**
     * Set modecollecte
     *
     * @param string $modecollecte
     *
     * @return Droppings
     */
    public function setModecollecte($modecollecte)
    {
        $this->modecollecte = $modecollecte;

        return $this;
    }

    /**
     * Get modecollecte
     *
     * @return string
     */
    public function getModecollecte()
    {
        return $this->modecollecte;
    }

    /**
     * Set dateofcollection
     *
     * @param \DateTime $dateofcollection
     *
     * @return Droppings
     */
    public function setDateofcollection($dateofcollection)
    {
        $this->dateofcollection = $dateofcollection;

        return $this;
    }

    /**
     * Get dateofcollection
     *
     * @return \DateTime
     */
    public function getDateofcollection()
    {
        return $this->dateofcollection;
    }

    /**
     * Set sitename
     *
     * @param string $sitename
     *
     * @return Droppings
     */
    public function setSitename($sitename)
    {
        $this->sitename = $sitename;

        return $this;
    }

    /**
     * Get sitename
     *
     * @return string
     */
    public function getSitename()
    {
        return $this->sitename;
    }

    /**
     * Set animalident
     *
     * @param boolean $animalident
     *
     * @return Droppings
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
     * @return Droppings
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
