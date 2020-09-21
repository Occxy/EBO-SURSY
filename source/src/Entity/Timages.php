<?php
# src/Entity/Timages.php

namespace Tuto\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Timages
 *
 * @ORM\Table(name="timages", indexes={@ORM\Index(name="NIdent", columns={"NIdent"})})
 * @ORM\Entity
 */
class Timages
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
     * @ORM\Column(name="NIdent", type="string", length=255, nullable=true)
     */
    private $nident;

    /**
     * @var string
     *
     * @ORM\Column(name="Image", type="blob", nullable=true)
     */
    private $image;



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
     * Set nident
     *
     * @param string $nident
     *
     * @return Timages
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

    /**
     * Set image
     *
     * @param string $image
     *
     * @return Timages
     */
    public function setImage($image)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get image
     *
     * @return string
     */
    public function getImage()
    {
        return $this->image;
    }
}
