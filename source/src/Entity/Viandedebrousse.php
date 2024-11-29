<?php
# src/Entity/Viandedebrousse.php

namespace Tuto\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Viandedebrousse
 *
 * @ORM\Table(name="viandedebrousse", indexes={@ORM\Index(name="Code", columns={"Code"})})
 * @ORM\Entity
 */
class Viandedebrousse
{
    /**
     * @var integer
     *
     * @ORM\Column(name="N", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $n;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="Date", type="datetime", nullable=true)
     */
    private $date;

    /**
     * @var string
     *
     * @ORM\Column(name="Province", type="string", length=255, nullable=true)
     */
    private $province;

    /**
     * @var string
     *
     * @ORM\Column(name="Code", type="string", length=255, nullable=true)
     */
    private $code;

    /**
     * @var string
     *
     * @ORM\Column(name="Village", type="string", length=255, nullable=true)
     */
    private $village;

    /**
     * @var string
     *
     * @ORM\Column(name="Genre", type="string", length=255, nullable=true)
     */
    private $genre;



    /**
     * Get n
     *
     * @return integer
     */
    public function getN()
    {
        return $this->n;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Viandedebrousse
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set province
     *
     * @param string $province
     *
     * @return Viandedebrousse
     */
    public function setProvince($province)
    {
        $this->province = $province;

        return $this;
    }

    /**
     * Get province
     *
     * @return string
     */
    public function getProvince()
    {
        return $this->province;
    }

    /**
     * Set code
     *
     * @param string $code
     *
     * @return Viandedebrousse
     */
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * Get code
     *
     * @return string
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Set village
     *
     * @param string $village
     *
     * @return Viandedebrousse
     */
    public function setVillage($village)
    {
        $this->village = $village;

        return $this;
    }

    /**
     * Get village
     *
     * @return string
     */
    public function getVillage()
    {
        return $this->village;
    }

    /**
     * Set genre
     *
     * @param string $genre
     *
     * @return Viandedebrousse
     */
    public function setGenre($genre)
    {
        $this->genre = $genre;

        return $this;
    }

    /**
     * Get genre
     *
     * @return string
     */
    public function getGenre()
    {
        return $this->genre;
    }
}
