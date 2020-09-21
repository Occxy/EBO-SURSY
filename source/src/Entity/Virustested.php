<?php
# src/Entity/Virustested.php

namespace Tuto\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Virustested
 *
 * @ORM\Table(name="virustested", indexes={@ORM\Index(name="NIdent", columns={"NIdent"})})
 * @ORM\Entity
 */
class Virustested
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
     * @var boolean
     *
     * @ORM\Column(name="MarburgVirusTested", type="boolean", nullable=true)
     */
    private $marburgvirustested;

    /**
     * @var boolean
     *
     * @ORM\Column(name="ParamyxovirusTested", type="boolean", nullable=true)
     */
    private $paramyxovirustested;

    /**
     * @var boolean
     *
     * @ORM\Column(name="CoronavirusTested", type="boolean", nullable=true)
     */
    private $coronavirustested;

    /**
     * @var boolean
     *
     * @ORM\Column(name="FlavivirusTested", type="boolean", nullable=true)
     */
    private $flavivirustested;

    /**
     * @var boolean
     *
     * @ORM\Column(name="Alphavirus", type="boolean", nullable=true)
     */
    private $alphavirus;

    /**
     * @var boolean
     *
     * @ORM\Column(name="Lissavirus", type="boolean", nullable=true)
     */
    private $lissavirus;



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
     * @return Virustested
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
     * Set marburgvirustested
     *
     * @param boolean $marburgvirustested
     *
     * @return Virustested
     */
    public function setMarburgvirustested($marburgvirustested)
    {
        $this->marburgvirustested = $marburgvirustested;

        return $this;
    }

    /**
     * Get marburgvirustested
     *
     * @return boolean
     */
    public function getMarburgvirustested()
    {
        return $this->marburgvirustested;
    }

    /**
     * Set paramyxovirustested
     *
     * @param boolean $paramyxovirustested
     *
     * @return Virustested
     */
    public function setParamyxovirustested($paramyxovirustested)
    {
        $this->paramyxovirustested = $paramyxovirustested;

        return $this;
    }

    /**
     * Get paramyxovirustested
     *
     * @return boolean
     */
    public function getParamyxovirustested()
    {
        return $this->paramyxovirustested;
    }

    /**
     * Set coronavirustested
     *
     * @param boolean $coronavirustested
     *
     * @return Virustested
     */
    public function setCoronavirustested($coronavirustested)
    {
        $this->coronavirustested = $coronavirustested;

        return $this;
    }

    /**
     * Get coronavirustested
     *
     * @return boolean
     */
    public function getCoronavirustested()
    {
        return $this->coronavirustested;
    }

    /**
     * Set flavivirustested
     *
     * @param boolean $flavivirustested
     *
     * @return Virustested
     */
    public function setFlavivirustested($flavivirustested)
    {
        $this->flavivirustested = $flavivirustested;

        return $this;
    }

    /**
     * Get flavivirustested
     *
     * @return boolean
     */
    public function getFlavivirustested()
    {
        return $this->flavivirustested;
    }

    /**
     * Set alphavirus
     *
     * @param boolean $alphavirus
     *
     * @return Virustested
     */
    public function setAlphavirus($alphavirus)
    {
        $this->alphavirus = $alphavirus;

        return $this;
    }

    /**
     * Get alphavirus
     *
     * @return boolean
     */
    public function getAlphavirus()
    {
        return $this->alphavirus;
    }

    /**
     * Set lissavirus
     *
     * @param boolean $lissavirus
     *
     * @return Virustested
     */
    public function setLissavirus($lissavirus)
    {
        $this->lissavirus = $lissavirus;

        return $this;
    }

    /**
     * Get lissavirus
     *
     * @return boolean
     */
    public function getLissavirus()
    {
        return $this->lissavirus;
    }
}
